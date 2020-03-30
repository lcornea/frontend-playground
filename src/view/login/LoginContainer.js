import {setUser} from "state/actions/creators/UserActions";
import {connect} from "react-redux";
import LoginComponent from "./LoginComponent";

const mapStateToProps = (appState) => {
    return {username: appState.user.username}
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (username) => {
            dispatch(setUser(username));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)