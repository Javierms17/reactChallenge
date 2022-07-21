import LevelReducer from './LevelReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    level : LevelReducer
});

export default allReducers;