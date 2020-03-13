import { interestConstants } from '../constants';
import { interestService } from '../services';

export const interestActions = {
    getInterestById
};

function getInterestById(interestId) {
    return async dispatch => {
        dispatch({
            type: interestConstants.GETINTERESTBYID_REQUEST,
            id: interestId
        });

        try {
            const interest = await interestService.getInterestById(interestId);
            dispatch({
                type: interestConstants.GETINTERESTBYID_SUCCESS,
                interest
            });
        } catch (e) {
            dispatch({ type: interestConstants.GETINTERESTBYID_FAILURE, e });
        }
    };
}
