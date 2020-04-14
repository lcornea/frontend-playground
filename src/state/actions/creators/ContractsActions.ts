import {Action} from "@ngrx/store";
import ContractsActions from "../types/ContractsActions";
import {Contract} from "../../Models/Contract";


export class AddContract implements Action {
  type = ContractsActions.addContract;

  constructor(public payload: Contract) {
  }
}

export class RemoveContracts implements Action {
  type = ContractsActions.removeContracts;

  constructor(public payload: Array<string>) {
  }
}

export class SubmitContractForEdit implements Action {
  type = ContractsActions.submitContractForEdit;

  constructor(public payload: string) {

  }
}

export class CommitContractEdit implements Action {
  type = ContractsActions.commitContractEdit;

  constructor(public payload: Contract) {

  }
}
