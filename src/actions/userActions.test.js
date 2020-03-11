import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { userActions } from './';
import { userService } from '../services';
import { userConstants } from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('userActions', () => {
    beforeEach(() => {
        store = mockStore({ user: {} });

        jest.spyOn(userService, 'login').mockImplementation(() =>
            Promise.resolve({})
        );
    });

    afterEach(() => {
        userService.login.mockRestore();
    });

    describe('login', () => {
        it('should call userService.login', async () => {
            await store.dispatch(userActions.login());

            expect(userService.login).toHaveBeenCalledTimes(1);
        });

        it('should dispatch a LOGIN_SUCCESS action', async () => {
            const expectedActions = [
                { type: userConstants.LOGIN_SUCCESS, user: {} }
            ];

            await store.dispatch(userActions.login());

            expect(store.getActions()).toEqual(
                expect.arrayContaining(expectedActions)
            );
        });
    });
});
