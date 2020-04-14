import user from "../reducers/UserReducer"
import contractPopUp from "../reducers/ContractPopUpReducer"
import contracts from "../reducers/ContractsReducer"
import {StoreModule} from "@ngrx/store";

export default StoreModule.forRoot({user, contractPopUp, contracts});
