import {combineReducers} from 'redux';

import config from './config';
import data from './data';

const r = combineReducers({
  config,
  data
});

export default r;