import {connect} from "react-redux";
import EditContractPopUpComponent from "./EditContractPopUpComponent";
import {commitContractEdit} from "state/actions/creators/ContractsActions";
import {hideEditContractPopUp} from "state/actions/creators/ContractPopupActions";

const mapStateToProps = (appState, ownProps) => {
    let newProps = {
        ...ownProps,
        visible: appState.contractPopUp.showEditPopup,
        editContractData: appState.contracts.contractEdit
    };
    return newProps
};

const mapDispatchToProps = (dispatch) => {
    return {
        hidePopup: () => {
            dispatch(hideEditContractPopUp());
        },
        updateContract: (contract) => {
            dispatch(commitContractEdit(contract));
            dispatch(hideEditContractPopUp());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContractPopUpComponent);