import ContractPopUpActions from "../types/ContractPopupActions";
import {Action} from "@ngrx/store";

export class ShowContractAddPopUp implements Action {
  type = ContractPopUpActions.showContractAddPopUp;
  payload = null;
}

export class HideAddContractPopUp implements Action {
  type = ContractPopUpActions.hideAddContractPopUp;
  payload = null;
}

export class ShowEditContractPopUp implements Action {
  type = ContractPopUpActions.showContractEditPopUp;
  payload = null;
}

export class HideEditContractPopUp implements Action {
  type = ContractPopUpActions.hideEditContractPopUp;
  payload = null;
}


