import {ADD,SUB} from './action-types';
export default function(state={number:0,status:''},action={}){
    switch(action.type){
        case ADD:
            return {...state,number:state.number+1};
        case SUB:
            return {...state,number:state.number-1};
        default:
            return state;
    }
}