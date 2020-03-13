import { skillConstants } from '../constants';
import { skillService } from '../services';

export const skillActions = {
    getSkillById
};

function getSkillById(skillId) {
    return async dispatch => {
        dispatch({ type: skillConstants.GETSKILLBYID_REQUEST, id: skillId });

        try {
            const skill = await skillService.getSkillById(skillId);
            dispatch({ type: skillConstants.GETSKILLBYID_SUCCESS, skill });
        } catch (e) {
            dispatch({ type: skillConstants.GETSKILLBYID_FAILURE, e });
        }
    };
}
