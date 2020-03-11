import { history } from '../helpers';
import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
    login,
    logout,
    getInterests,
    getSkills
};

function login(username, password) {
    return async dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST, username });

        try {
            const user = await userService.login(username, password);
            dispatch({ type: userConstants.LOGIN_SUCCESS, user });
            history.push('/');
        } catch (e) {
            dispatch({ type: userConstants.LOGIN_FAILURE, e });
        }
    };
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getInterests(userId) {
    return async dispatch => {
        dispatch({ type: userConstants.GETINTERESTS_REQUEST, userId });
    };
}

function getSkills() {}
