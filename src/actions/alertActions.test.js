import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { alertActions } from './';
import { alertConstants } from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('alertActions', () => {
    beforeEach(() => {
        store = mockStore({ user: {} });
    });

    it('should dispatch a SUCCESS action', async () => {
        const message = 'The sun machine is coming down';
        const expectedActions = [
            {
                type: alertConstants.SUCCESS,
                message
            }
        ];

        await store.dispatch(alertActions.success(message));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch a ERROR action', async () => {
        const message = 'So hologramic, oh my TVC15';
        const expectedActions = [
            {
                type: alertConstants.ERROR,
                message
            }
        ];

        await store.dispatch(alertActions.error(message));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch a CLEAR action', async () => {
        const expectedActions = [
            {
                type: alertConstants.CLEAR
            }
        ];

        await store.dispatch(alertActions.clear());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
