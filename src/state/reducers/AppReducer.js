import {combineReducers} from 'redux';
import user from "./UserReducer";
import contractPopUp from "./ContractPopUpReducer";
import contracts from "./ContractsReducer"

const appReducer = combineReducers({user, contractPopUp, contracts});

export default appReducer;