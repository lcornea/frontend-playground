import {Action} from '@ngrx/store'
import UserActions from "../types/UserActions";

export class UserActionsSetUser implements Action {
  type = UserActions.setUser;

  constructor(public payload: String) {
  }
}
