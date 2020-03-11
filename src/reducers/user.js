import { userConstants } from '../constants';

let authUser = JSON.parse(localStorage.getItem('user'));

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                user: { username: action.username }
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.user.data
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}

const initialUserState = authUser
    ? authUser
    : {
          id: null,
          username: '',
          email: '',
          interests: [],
          skills: []
      };
