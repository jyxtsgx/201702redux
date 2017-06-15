import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
// 合并后的 state tree的属性名和reducer名字一样
//{todos:[],filter:'all'}
export default combineReducers({
    todos,
    filter
})