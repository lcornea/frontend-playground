import UserActions from "../actions/types/UserActions";
import reducerBase from "./ReducerBase";

const defaultState = {username: ""};
let reducers = {};
reducers[UserActions.setUser] = function (state, username) {
  return {...state, username: username}
};

export default reducerBase(reducers, defaultState);
