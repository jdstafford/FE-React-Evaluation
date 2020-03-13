import { skillConstants } from '../constants';

export default function skill(state = {}, action) {
    switch (action.type) {
        case skillConstants.GETSKILLBYID_SUCCESS:
            return action.skill;
        default:
            return state;
    }
}
