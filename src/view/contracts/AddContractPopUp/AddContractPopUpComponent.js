import * as React from "react";
import {Dialog} from 'primereact/dialog';
import {Button} from "primereact/button";
import validateContract from "view/contracts/commons/ContractValidation";
import ContractEditorPanelComponent from "view/contracts/ContractEditorPanel/ContractEditorPanelComponent";


class addContractPopUpComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valid: false};
        this.formData = {};
    }

    onHide = () => {
        this.props.hidePopup();
    };

    handleAdd = () => {
        if (this.state.valid) {
            this.props.saveContract(this.formData)
        }
    };

    dataCallback = (data) => {
        const isDataValid = validateContract(data);
        this.formData = isDataValid ? data : {};
        if (this.state.valid !== isDataValid) {
            this.setState({
                valid: isDataValid
            });
        }
    };

    render() {
        const footer = (
            <div>
                <Button label="Close" onClick={this.onHide}/>
                <Button label="Save" onClick={this.handleAdd} disabled={!this.state.valid}/>
            </div>

        );
        return (
            <Dialog header="Add contract"
                    onHide={this.onHide}
                    visible={this.props.visible}
                    footer={footer}
            >
                <ContractEditorPanelComponent dataCallback={this.dataCallback}/>
            </Dialog>
        );
    }
}

export default addContractPopUpComponent;