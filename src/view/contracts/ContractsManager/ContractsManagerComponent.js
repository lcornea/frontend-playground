import * as React from "react";
import "./ContractManager.css";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import AddContractPopUpComponent from "view/contracts/AddContractPopUp/AddContractPopUpContainer";
import EditContractPopUpComponent from "view/contracts/EditContractPopUp/EditContractPopUpComponent";

class ContractsManagerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: []};
    }

    handleAddContractClick = () => {
        this.props.showPopup();
    };
    handleEditContractClick = () => {
        this.props.editContract(this.state.selected[0].id);
    };

    handleRemoveButtonClick = () => {
        const contractIds = this.state.selected.map((contract) => {
            return contract.id
        });
        this.props.removeContracts(contractIds);
    };

    selectRow = (e) => {
        this.setState({...this.state, selected: e.value})
    };

    formatDate = (date) => {
        let day = date.getDate();
        day = (day > 10 ? "" : "0") + day;
        let month = date.getMonth() + 1;
        month = (month > 10 ? "" : "0") + month;
        let year = date.getFullYear();
        return day + "/" + month + "/" + year;
    };

    convertDataForRender = (data) => {
        let rows = [];
        for (let id in data) {
            if (!data.hasOwnProperty(id)) {
                continue;
            }
            const rowData = data[id];
            rows.push({
                id: id,
                name: rowData.contractName,
                type: rowData.contractType,
                dueDate: this.formatDate(rowData.dueDate),
                startDate: this.formatDate(rowData.workInterval[0]),
                endDate: this.formatDate(rowData.workInterval[1])
            });
        }
        return rows;
    };

    render() {
        const renderData = this.convertDataForRender(this.props.contracts);
        const emptyMessage = (<h5>No elements to show.</h5>);
        const disabledRemove = this.state.selected.length === 0;
        const editDisabled = this.state.selected.length !== 1;

        return (<div className={"contracts-manager"}>
            <div className="contracts-manager-data-container">
                <DataTable value={renderData}
                           selectionMode="multiple"
                           onSelectionChange={this.selectRow}
                           selection={this.state.selected}
                           emptyMessage={emptyMessage}>

                    <Column field="name" header=" Name" sortable={true}/>
                    <Column field="type" header="Type" sortable={true}/>
                    <Column field="dueDate" header="Due"/>
                    <Column field="startDate" header="Start date"/>
                    <Column field="endDate" header="End Date"/>
                </DataTable>
                <div className="contracts-manager-toolbar">
                    <Button label="Add New"
                            icon="pi pi-plus"
                            iconPos="right"
                            onClick={this.handleAddContractClick}/>
                    <Button label="Edit"
                            icon="pi pi-pencil"
                            iconPos="right"
                            disabled={editDisabled}
                            onClick={this.handleEditContractClick}/>
                    <Button label="remove"
                            icon="pi pi-times"
                            className="p-button-danger"
                            disabled={disabledRemove}
                            onClick={this.handleRemoveButtonClick}/>

                </div>
            </div>
            <AddContractPopUpComponent/>
            <EditContractPopUpComponent/>
        </div>)
    }
}

export default ContractsManagerComponent;