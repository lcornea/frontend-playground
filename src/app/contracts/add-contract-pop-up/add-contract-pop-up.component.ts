import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {contractPopUp} from "../../../state/store/StoreSelectors";
import {HideAddContractPopUp} from "../../../state/actions/creators/ContractPopupActions";


@Component({
  selector: 'app-add-contract-pop-up',
  templateUrl: './add-contract-pop-up.component.html',
  styleUrls: ['./add-contract-pop-up.component.css']
})
export class AddContractPopUpComponent implements OnInit {
  display: boolean;
  isFormValid: boolean;

  constructor(private store: Store) {
    store.select(this.getDisplay).subscribe((display) => {
      this.display = display
    });
  }

  getDisplay(state) {
    return contractPopUp(state).showAddPopup;
  }

  ngOnInit(): void {
  }

  onHide() {
    this.store.dispatch(new HideAddContractPopUp())
  }

  onFormUpdate(isFormValid) {
    this.isFormValid = isFormValid;
  }
}
