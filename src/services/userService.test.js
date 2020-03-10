import { userService } from './';
// import { fakeInterests, fakeSkills } from './dummy-data';

describe('userService', () => {
    it('login() should return a user object on success', async () => {
        const authenticatedUser = await userService.login({
            username: 'lucy@parsons.com',
            password: 'abc123'
        });

        expect(Object.keys(authenticatedUser.data)).toMatchObject([
            'id',
            'name',
            'username',
            'token'
        ]);
    });
});
