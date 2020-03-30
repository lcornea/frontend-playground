import ContractsManagerComponent from "./ContractsManagerComponent";
import {connect} from "react-redux";
import {showContractAddPopUp, showEditContractPopUp} from "state/actions/creators/ContractPopupActions";
import {submitContractForEdit, removeContracts} from "state/actions/creators/ContractsActions";

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        contracts: state.contracts.contracts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPopup: () => {
            dispatch(showContractAddPopUp());
        },
        removeContracts: (contractIds) => {
            dispatch(removeContracts(contractIds))
        },
        editContract: (contractId) => {
            dispatch(submitContractForEdit(contractId));
            dispatch(showEditContractPopUp())
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractsManagerComponent);