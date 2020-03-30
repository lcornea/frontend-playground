import * as React from "react";
import "./ContractEditorPanel.css"
import {AutoComplete} from "primereact/autocomplete";
import {InputText} from "primereact/inputtext";
import {Calendar} from "primereact/calendar";

class ContractEditorPanelComponent extends React.Component {
    constructor(props) {
        super(props);
        const formData = props.formData || {};

        this.state = {
            contractName: formData.contractName || "",
            contractType: formData.contractType || "",
            dueDate: formData.dueDate || null,
            workInterval: formData.workInterval || null,
            typeSuggestions: null
        };
        if (!props.dataCallback || typeof (props.dataCallback) !== "function") {
            this.dataCallback = function () {
            };
        } else {
            this.dataCallback = props.dataCallback;
        }


        this.contractTypes = ["SelfHosted", "Delivery", "Code Only"];
        this.elmerFud = {
            firstDayOfWeek: 1,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Duwsday", "Fwiday", "Satuwday"],
            dayNamesShort: ["sun", "mon", "tue", "wed", "duw", "fwi", "sat"],
            dayNamesMin: ["C", "M", "T", "W", "D", "F", "S"],
            monthNames: ["Januawy", "Febwuawy", "Mawch", "Apwiw", "May", "June", "Juwy", "August", "Septembew", "Octobew", "Novembew", "Decembew"],
            monthNamesShort: ["jan", "feb", "maw", "apw", "may", "jun", "juw", "aug", "sep", "oct", "nov", "dec"],
            today: 'Today',
            clear: 'Cweaw',
            dateFormat: 'dd/mm/yy',
            weekHeader: 'Sm'
        };
        this.dateFormat = "dd/mm/yy"
    }

    contractNameChange = (e) => {
        this.setState({
            ...this.state,
            contractName: e.target.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.dataCallback({
            contractName: this.state.contractName,
            contractType: this.state.contractType,
            dueDate: this.state.dueDate,
            workInterval: this.state.workInterval
        });
    }

    suggestTypes = (e) => {
        let results = this.contractTypes.filter((type) => {
            return type.toLowerCase().startsWith(e.query.toLowerCase());
        });
        this.setState({typeSuggestions: results});
    };

    handleTypeSelection = (e) => {
        this.setState({contractType: e.value});
    };

    handleDueDateChange = (e) => {
        this.setState({dueDate: e.value})
    };
    handleWorkIntervalChange = (e) => {
        const dateInterval = e.value;
        this.setState({workInterval: dateInterval});
    };

    render() {
        const minDate = new Date();
        let date = new Date();
        const maxDate = new Date(date.setMonth(date.getMonth() + 3));
        return (<div className="contract-editor">
            <h3>Add new contract</h3>
            <hr/>
            <div className="contract-editor-input-container">
                <div className="contract-editor-input-line">
                    <label>Contract Name: </label>
                    <InputText value={this.state.contractName}
                               onChange={this.contractNameChange}
                               className="contract-editor-input-element"
                    />
                </div>
                <div className="contract-editor-input-line">
                    <label>Contract Type: </label>
                    <AutoComplete dropdown={true}
                                  value={this.state.contractType}
                                  onChange={this.handleTypeSelection}
                                  suggestions={this.state.typeSuggestions}
                                  completeMethod={this.suggestTypes}
                                  className="contract-editor-input-element"

                    />
                </div>
                <div className="contract-editor-input-line">
                    <label> Due date</label>
                    <Calendar className="contract-editor-input-element"
                              value={this.state.dueDate}
                              onChange={this.handleDueDateChange}
                              locale={this.elmerFud}
                              dateFormat={this.dateFormat}
                              minDate={minDate}
                              maxDate={maxDate}
                    />
                </div>
                <div className="contract-editor-input-line">
                    <label> Work Interval</label>
                    <Calendar className="contract-editor-input-element"
                              value={this.state.workInterval}
                              onChange={this.handleWorkIntervalChange}
                              selectionMode="range"
                              readOnlyInput={true}
                              dateFormat={this.dateFormat}
                              minDate={minDate}
                              maxDate={maxDate}
                    />
                </div>
            </div>
        </div>);
    }
}

export default ContractEditorPanelComponent;