import { fakeInterests } from '../dummy-data';

export const interestService = {
    getInterestById
};

async function getInterestById(interestId) {
    // axios-mock-adapter was causing me grief.
    // faking the entire request / response here
    const interest = fakeInterests.find(i => i.id === parseInt(interestId));
    console.info(`GET '/interests/${interestId}': ${JSON.stringify(interest)}`);
    return interest;
}
