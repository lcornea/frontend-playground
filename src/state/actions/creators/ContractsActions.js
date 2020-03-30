import ContractsActions from "state/actions/types/ContractsActions";


export function addContract(contract) {
    return {
        type: ContractsActions.addContract,
        payload: contract
    }
}

export function removeContracts(contractIds) {
    return {
        type: ContractsActions.removeContracts,
        payload: contractIds
    }
}

export function submitContractForEdit(contractId) {
    return {
        type: ContractsActions.submitContractForEdit,
        payload: contractId
    }
}

export function commitContractEdit(contractData) {
    return {
        type: ContractsActions.commitContractEdit,
        payload: contractData
    }
}