import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {user} from "../state/store/StoreSelectors";
import {UserActionsSetUser} from "../state/actions/creators/UserActions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user$: Observable<String>;

  constructor(private store: Store) {
    this.user$ = store.select(this.getUser);
  }

  getUser(state) {
    return user(state).username;
  }

  handleLogout() {
    this.store.dispatch(new UserActionsSetUser(""));
  }

  ngOnInit(): void {
  }
}
