import { combineReducers } from 'redux';
import interest from './interest';
import skill from './skill';
import user from './user';

export default combineReducers({ interest, skill, user });
