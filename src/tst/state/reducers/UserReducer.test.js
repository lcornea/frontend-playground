import userReducer from "state/reducers/UserReducer"
import UserActions from "state/actions/types/UserActions";

test("When UserActions.setUser action is dispatched then reducer updates state correctly", function () {
    let state = {k: "value"};
    const expectedState = {k: "value", username: "username"};
    const stateCopy = {...state};
    const action = {
        type: UserActions.setUser,
        payload: "username"
    };
    const outState = userReducer(state, action);
    //test output state is correct
    expect(outState).toEqual(expectedState);
    //test that input state was not modified
    expect(state).toEqual(stateCopy);
});