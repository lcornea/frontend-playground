import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {contractPopUp, contracts} from "../../../state/store/StoreSelectors";
import {HideEditContractPopUp} from "../../../state/actions/creators/ContractPopupActions";
import {Contract} from "../../../state/Models/Contract";

@Component({
  selector: 'app-edit-contract-pop-up',
  templateUrl: './edit-contract-pop-up.component.html',
  styleUrls: ['./edit-contract-pop-up.component.css']
})
export class EditContractPopUpComponent implements OnInit {
  display: boolean;
  isFormValid: boolean;
  contract: Contract;

  constructor(private store: Store) {
    store.select(this.getDisplay).subscribe((display: boolean) => {
      this.display = display
    });

    store.select(this.getEditContract).subscribe((contract: Contract) => {
      this.contract = Object.assign({}, contract);
    })
  }

  getDisplay(state): boolean {
    return contractPopUp(state).showEditPopup;
  }

  getEditContract(state): Contract {
    return contracts(state).contractEdit;
  }

  ngOnInit(): void {
  }

  onHide() {
    this.store.dispatch(new HideEditContractPopUp())
  }

  onFormUpdate(isFormValid) {
    this.isFormValid = isFormValid;
  }

}
