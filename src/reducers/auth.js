import { extend } from 'lodash';
import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialUserState = user ? extend({}, user) : {};

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
