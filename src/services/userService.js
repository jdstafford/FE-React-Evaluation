import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fakeInterests, fakeSkills } from './dummy-data';

var mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onPost('/users/authenticate').reply(200, {
    user: {
        id: 12345,
        name: 'Lucy Parsons',
        username: 'lucy@parsons.com',
        token: 'this-is-where-a-token-would-go'
    }
});

mock.onGet(/\/users\/\d+\/interests/).reply(200, fakeInterests);

mock.onGet(/\/users\/\d+\/skills/).reply(200, fakeSkills);

export const userService = {
    login,
    logout,
    fetchInterests,
    fetchSkills
};

function login(username, password) {
    axios.post(`${config.apiUrl}/users/authenticate`, {}).then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

function logout() {
    localStorage.removeItem('user');
}
