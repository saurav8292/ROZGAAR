import { combineReducers } from 'redux';

import auth from './auth';
import job from './job';
const reducers = combineReducers({ auth, job });

export default reducers;