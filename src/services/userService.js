import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fakeInterests, fakeSkills } from '../dummy-data';

const mock = new MockAdapter(axios, { delayResponse: 250 });

mock.onPost('/users/authenticate').reply(200, {
    id: 12345,
    name: 'Tom Hanks',
    token: 'this-is-where-a-token-would-go'
});

mock.onGet(/\/users\/\d+\/interests/).reply(200, fakeInterests);

mock.onGet(/\/users\/\d+\/skills/).reply(200, fakeSkills);

export const userService = {
    login,
    logout,
    getInterests,
    getSkills
};

async function login(username, password) {
    const user = await axios.post('/users/authenticate', {
        username,
        password
    });

    // this is a little janky.  We want to use the username from form input,
    // but I also thought it would be nice to have a true "user" object.
    // I'm decorating the hard-coded user with the username from input
    user.data.username = username;

    console.info(
        `POST '/users/authenticate', ${JSON.stringify({
            username,
            password
        })}: ${JSON.stringify(user)}`
    );

    localStorage.setItem('user', JSON.stringify(user.data));

    return user;
}

function logout() {
    localStorage.removeItem('user');
}

async function getInterests(userId) {
    const interests = await axios.get(`/users/${userId}/interests`);
    console.info(
        `GET '/users/${userId}/interests': ${JSON.stringify(interests)}`
    );
    return interests;
}

async function getSkills(userId) {
    const skills = await axios.get(`/users/${userId}/skills`);
    console.info(`GET '/users/${userId}/skills': ${JSON.stringify(skills)}`);
    return skills;
}
