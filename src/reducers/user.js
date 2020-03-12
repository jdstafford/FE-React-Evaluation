import { userConstants } from '../constants';

let authUser = JSON.parse(localStorage.getItem('user'));

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case userConstants.GETINTERESTS_SUCCESS:
            return {
                ...state,
                interests: action.interests.data
            };
        case userConstants.GETSKILLS_SUCCESS:
            return {
                ...state,
                skills: action.skills.data
            };
        case userConstants.LOGIN_REQUEST:
            return { username: action.username };
        case userConstants.LOGIN_SUCCESS:
            return action.user.data;
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
