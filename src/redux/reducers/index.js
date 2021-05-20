import {combineReducers} from 'redux';
import {todos} from './todos';
import {visibilityFilter} from './visibiltiy';


export default combineReducers({todos, visibilityFilter});