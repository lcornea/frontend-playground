import ContractPopUpActions from "../actions/types/ContractPopupActions";
import defaultReducer from "./ReducerBase"


const defaultState = {
    showAddPopup: false,
    showEditPopup: false
};

let reducers = {};

reducers[ContractPopUpActions.showContractAddPopUp] = function (state) {
    return {...state, showAddPopup: true};
};

reducers[ContractPopUpActions.hideAddContractPopUp] = function (state) {
    return {...state, showAddPopup: false};
};

reducers[ContractPopUpActions.showContractEditPopUp] = function (state) {
    return {...state, showEditPopup: true};
};

reducers[ContractPopUpActions.hideEditContractPopUp] = function (state) {
    return {...state, showEditPopup: false};
};

export default defaultReducer(reducers, defaultState);

