import { interestConstants } from '../constants';

export default function interest(state = {}, action) {
    switch (action.type) {
        case interestConstants.GETINTERESTBYID_SUCCESS:
            return action.interest;
        default:
            return state;
    }
}
