import * as React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

    handleTextChange = (e) => {
        this.setState(Object.assign({}, this.state, {username: e.target.value}));
    };

    handleSave = () => {
        this.props.setUser(this.state.username);
    };

    componentDidMount() {
        const newState = Object.assign({}, this.state, this.props);
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <h4>Login:</h4>
                <label>Username: </label>
                <InputText onChange={this.handleTextChange}
                           value={this.state.username}
                />
                &nbsp;
                <Button label="Save"
                        icon="pi pi-check"
                        iconPos="right"
                        onClick={this.handleSave}/>
            </div>
        );
    }

}

export default LoginComponent;