import * as actionTypes from '../action-types';
//actionCreator 创建action
export default {
    changeFilter(filter){
        return {
            type:actionTypes.CHANGE_FILTER,
            filter
        }
    }
}