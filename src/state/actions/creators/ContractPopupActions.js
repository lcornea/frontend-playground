import ContractPopUpActions from "../types/ContractPopupActions";

export function showContractAddPopUp() {
    return {
        type: ContractPopUpActions.showContractAddPopUp,
        payload: {}
    }
}

export function hideAddContractPopUp() {
    return {
        type: ContractPopUpActions.hideAddContractPopUp,
        payload: {}
    }
}

export function showEditContractPopUp() {
    return {
        type: ContractPopUpActions.showContractEditPopUp,
        payload: {}
    }
}

export function hideEditContractPopUp() {
    return {
        type: ContractPopUpActions.hideEditContractPopUp,
        payload: {}
    }
}
