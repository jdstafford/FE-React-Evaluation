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
        try {
            const interests = await userService.getInterests(userId);
            dispatch({ type: userConstants.GETINTERESTS_SUCCESS, interests });
        } catch (e) {
            dispatch({ type: userConstants.GETINTERESTS_FAILURE, e });
        }
    };
}

function getSkills(userId) {
    return async dispatch => {
        dispatch({ type: userConstants.GETSKILLS_REQUEST, userId });
        try {
            const skills = await userService.getSkills(userId);
            dispatch({ type: userConstants.GETSKILLS_SUCCESS, skills });
        } catch (e) {
            dispatch({ type: userConstants.GETSKILLS_FAILURE, e });
        }
    };
}
