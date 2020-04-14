import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Contract} from "../../../state/Models/Contract";
import {FormControl, Validators} from "@angular/forms";
import {AddContract, CommitContractEdit} from "../../../state/actions/creators/ContractsActions";
import {HideAddContractPopUp, HideEditContractPopUp} from "../../../state/actions/creators/ContractPopupActions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-contract-editor-panel',
  templateUrl: './contract-editor-panel.component.html',
  styleUrls: ['./contract-editor-panel.component.css']
})
export class ContractEditorPanelComponent implements OnInit, OnChanges {

  @Input() set contract(contract: Contract) {
    if (this.initialized) {
      this.name.reset(contract.contractName);
      this.type.reset({label: contract.contractType});
      this.dueDate = contract.dueDate;
      this.interval = contract.workInterval;
      this.contractId = contract.id;
      this.handleFormChange()
    }
  }

  @Output()
  validForm: EventEmitter<Boolean>;


  name: FormControl;
  type: FormControl;
  dueDate: Date;
  interval: Array<Date>;
  contractTypes: Array<any>;
  initialized: boolean = false;
  contractId: string;

  constructor(private store: Store) {
    this.validForm = new EventEmitter<Boolean>();
    //Note: We need an empty option at top, otherwise the first one is shown selected, but is not, and cannot be selected
    this.contractTypes = [{label: ""}, {label: "SelfHosted"}, {label: "Delivery"}, {label: "Code Only"}];
  }

  handleFormChange = (): void => {
    this.validForm.emit(this.isFormValid());
  };

  ngOnInit(): void {

    this.name = new FormControl("", [Validators.required, Validators.minLength(3)]);
    this.type = new FormControl(this.contractTypes[0].label, [Validators.required]);
    this.dueDate = new Date();
    this.interval = [new Date(), new Date];
    this.initialized = true;
  }


  validateDate = (date: Date): boolean => {
    if (!(date instanceof Date)) {
      return false;
    }
    return !Number.isNaN(date.getTime());

  };

  validateDateInterval = (interval: Array<Date>): boolean => {

    if (interval.length != 2) {
      return false;
    }
    return this.validateDate(interval[0]) && this.validateDate(interval[1]);
  };

  generateContract = (): Contract => {
    return {
      id: this.contractId || (new Date()).getTime().toString(),
      contractName: this.name.value,
      contractType: this.type.value.label,
      dueDate: this.dueDate,
      workInterval: this.interval
    };
  };

  isFormValid = (): boolean => {
    //NOTE[PITFALL]: interval may not be set, check it first to stop evaluating validity
    return this.name.valid
      && this.type.valid
      && this.validateDate(this.dueDate)
      && typeof (this.interval) !== "undefined"
      && this.validateDateInterval(this.interval);
  };


  handleAdd = (): void => {
    this.store.dispatch(new AddContract(this.generateContract()));
    this.store.dispatch(new HideAddContractPopUp());
    this.resetForm();
  };

  handleEdit = (): void => {
    this.store.dispatch(new CommitContractEdit(this.generateContract()));
    this.store.dispatch(new HideEditContractPopUp());
    this.resetForm();
  };

  resetForm = (): void => {
    this.name.reset("");
    this.type.reset("");
    this.dueDate = new Date();
    this.interval = [new Date(), new Date()];
  };

  ngOnChanges = (changes: SimpleChanges): void => {
  }

}
