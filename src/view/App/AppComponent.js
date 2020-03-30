import React from 'react';
import './App.css';
import LoginComponent from "../login/LoginContainer";
import ContractsManagerComponent from "../contracts/ContractsManager/ContractsManagerContainer";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";

class AppComponent extends React.Component {

    doLogout = () => {
        this.props.logoutUser();
    };

    render() {
        if (this.props.username.trim().length === 0) {
            return (
                <div className="app-container">
                    <LoginComponent/>
                </div>
            );
        } else {
            return (<div className="app-container">
                <Toolbar>
                    <div className="p-toolbar-group-right">
                        <i className="pi pi-user"></i>
                        <label className="user-label">{this.props.username}</label>
                        <Button icon="pi pi-times" className="p-button-danger" onClick={this.doLogout}/>
                    </div>
                </Toolbar>
                <br/>
                <ContractsManagerComponent/>
            </div>);
        }

    }
}

export default AppComponent;
