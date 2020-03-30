import {connect} from 'react-redux'
import AppComponent from "./AppComponent";
import {setUser} from "state/actions/creators/UserActions";

const mapStateToProps = (state) => {
    return {username: state.user.username}
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            dispatch(setUser(""));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)