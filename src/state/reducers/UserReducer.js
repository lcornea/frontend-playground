import UserActions from "state/actions/types/UserActions";
import reducerBase from "./ReducerBase"

const defaultState = {username: ""};
let reducers = {};

reducers[UserActions.setUser] = function (state, userName) {
    const returnState = {...state, username: userName};
    return returnState;
};

export default reducerBase(reducers, defaultState);
