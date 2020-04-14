import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ButtonModule, CalendarModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  TooltipModule
} from "primeng";
import Store from "../state/store/Store";
import {AddContractPopUpComponent} from './contracts/add-contract-pop-up/add-contract-pop-up.component';
import {ContractManagerComponent} from './contracts/contract-manager/contract-manager.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContractEditorPanelComponent} from './contracts/contract-editor-panel/contract-editor-panel.component';
import {EditContractPopUpComponent} from './contracts/edit-contract-pop-up/edit-contract-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddContractPopUpComponent,
    ContractManagerComponent,
    ContractEditorPanelComponent,
    EditContractPopUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TooltipModule,
    ButtonModule,
    Store,
    ToolbarModule,
    DialogModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
