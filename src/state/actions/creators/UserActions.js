import UserActions from "../types/UserActions";

export function setUser(userName) {
    return {
        type: UserActions.setUser,
        payload: userName
    };
}