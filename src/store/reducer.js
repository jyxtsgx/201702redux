import * as types from './action-types';
//words里面存放的是联想词
export default function(state={words:[],status:''},action={}){
    switch (action.type){
        case types.FETCH_WORDS:
            return {...state,status:'加载中'};
        case types.FETCH_WORDS_SUCCESS:
            return {status:'',words:action.words};
        default:
            return state;
    }
}