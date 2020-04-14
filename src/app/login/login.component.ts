import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {UserActionsSetUser} from "../../state/actions/creators/UserActions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl("");

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.store.dispatch(new UserActionsSetUser(this.username.value));
  }
}
