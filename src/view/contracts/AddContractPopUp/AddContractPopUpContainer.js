import {hideAddContractPopUp} from "state/actions/creators/ContractPopupActions";
import AddContractPopUpComponent from "./AddContractPopUpComponent";
import {connect} from "react-redux";
import {addContract} from "state/actions/creators/ContractsActions";

const mapStateToProps = (appState, ownProps) => {
    let newState = {...ownProps, visible: appState.contractPopUp.showAddPopup};
    return newState
};

const mapDispatchToProps = (dispatch) => {
    return {
        hidePopup: () => {
            dispatch(hideAddContractPopUp());
        },
        saveContract: (contract) => {
            dispatch(addContract(contract));
            dispatch(hideAddContractPopUp());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContractPopUpComponent);