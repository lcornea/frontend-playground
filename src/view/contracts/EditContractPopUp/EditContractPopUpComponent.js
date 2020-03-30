import * as React from "react";
import validateContract from "../commons/ContractValidation";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import ContractEditorPanelComponent from "view/contracts/ContractEditorPanel/ContractEditorPanelComponent";

class EditContractPopUpComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valid: true, formData: {}};
        this.formData = {};
    }

    onHide = () => {
        this.props.hidePopup();
    };

    handleSave = () => {
        if (this.state.valid) {
            this.props.updateContract(this.formData)
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
                <Button label="Save" onClick={this.handleSave} disabled={!this.state.valid}/>
            </div>
        );
        return (
            <Dialog header="Edit contract"
                    onHide={this.onHide}
                    visible={this.props.visible}
                    footer={footer}
            >
                <ContractEditorPanelComponent
                    dataCallback={this.dataCallback}
                    formData={this.props.editContractData}
                />
            </Dialog>
        );
    }
}

export default EditContractPopUpComponent;