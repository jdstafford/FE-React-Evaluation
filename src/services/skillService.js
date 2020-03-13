import { fakeSkills } from '../dummy-data';

export const skillService = {
    getSkillById
};

async function getSkillById(skillId) {
    // axios-mock-adapter was causing me grief.
    // faking the entire request / response here
    const skill = fakeSkills.find(i => i.id === parseInt(skillId));
    console.info(`GET '/skills/${skillId}': ${JSON.stringify(skill)}`);
    return skill;
}
