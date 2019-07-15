import {combineReducers} from 'redux';
import text from './text';

export default combineReducers({text});

//複数のreducerをもった場合
//combineReducers({text, foo, baz});