import { userService } from './';
import { fakeInterests, fakeSkills } from '../dummy-data';

describe('userService', () => {
    it('login() should return a user object on success', async () => {
        const authenticatedUser = await userService.login(
            'lucy@parsons.com',
            'abc123'
        );

        expect(Object.keys(authenticatedUser.data)).toMatchObject([
            'id',
            'name',
            'token',
            'username'
        ]);
    });

    it('getInterests() should return a collection from dummy-data', async () => {
        const interests = await userService.getInterests(1);
        expect(interests.data).toMatchObject(fakeInterests);
    });

    it('getSkills() should return a collection from dummy-data', async () => {
        const skills = await userService.getSkills(1);
        expect(skills.data).toMatchObject(fakeSkills);
    });
});
