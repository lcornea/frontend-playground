import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Contract} from "../../../state/Models/Contract";
import {contracts} from "../../../state/store/StoreSelectors";
import {ShowContractAddPopUp, ShowEditContractPopUp} from "../../../state/actions/creators/ContractPopupActions";
import {RemoveContracts, SubmitContractForEdit} from "../../../state/actions/creators/ContractsActions";

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit {
  contracts: Observable<Array<Contract>>;
  columns: any[];
  editDisabled: boolean;
  removeDisabled: boolean;
  selectedRows: Array<string>;

  constructor(private store: Store) {
    this.contracts = store.select(this.getContracts);
    this.selectedRows = [];
  }

  ngOnInit(): void {
    this.columns = [{field: 'name', header: 'Name'},
      {field: 'type', header: 'Type'},
      {field: 'dueDate', header: 'Due'},
      {field: 'startDate', header: 'Start Date'},
      {field: 'endDate', header: 'End Date'}];
    this.editDisabled = true;
    this.removeDisabled = true;
  }

  formatDate(date) {
    let day = date.getDate();
    day = (day > 10 ? "" : "0") + day;
    let month = date.getMonth() + 1;
    month = (month > 10 ? "" : "0") + month;
    let year = date.getFullYear();
    return day + "/" + month + "/" + year;
  }

  convertDataForRender = (data) => {
    let rows = [];
    for (let id in data) {
      if (!data.hasOwnProperty(id)) {
        continue;
      }
      const rowData = data[id];
      rows.push({
        id: id,
        name: rowData.contractName,
        type: rowData.contractType,
        dueDate: this.formatDate(rowData.dueDate),
        startDate: this.formatDate(rowData.workInterval[0]),
        endDate: this.formatDate(rowData.workInterval[1])
      });
    }
    return rows;
  };

  updateButtonState = () => {
    this.editDisabled = this.selectedRows.length !== 1;
    this.removeDisabled = this.selectedRows.length === 0;
  };

  handleAddContractClick = () => {
    this.store.dispatch(new ShowContractAddPopUp());
  };

  handleEditContractClick = () => {
    this.store.dispatch(new ShowEditContractPopUp());
    this.store.dispatch(new SubmitContractForEdit(this.selectedRows[0]))
  };

  handleRemoveButtonClick = () => {
    this.store.dispatch(new RemoveContracts(this.selectedRows));
    this.selectedRows = [];
  };

  addRowSelection(selectedRow) {
    this.selectedRows.push(selectedRow.id);
    this.updateButtonState()
  }

  removeRowSelection(selectedRow) {
    this.selectedRows = this.selectedRows.filter((element) => {
      return element !== selectedRow.id
    });
    this.updateButtonState();
  }

  getContracts = (state) => {
    return this.convertDataForRender(contracts(state).contracts);
  };
}
