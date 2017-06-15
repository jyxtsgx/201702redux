import * as actionTypes from '../action-types';
export default  function(state={},action){
    switch (action.type){
        //改变过滤器的类型
        case actionTypes.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}