import {ADD,SUB,COUNTING} from './action-types';
export default {
    //ActionCreator就是action的创建器，用来创建action
    //redux中action必须也只能是纯对象plain object
    //Actions must be plain objects. Use custom middleware for async actions.
    add(){
      return function(dispatch){
         dispatch({type:COUNTING});
         setTimeout(function(){
             dispatch({type:ADD});
         },3000)
      }
    },
    sub(){
        return function(dispatch){
            dispatch({type:COUNTING});
            setTimeout(function(){
                dispatch({type:SUB});
            },3000)
        }
    }
}