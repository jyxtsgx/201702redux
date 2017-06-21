import {ADD,SUB} from './action-types';
export default {
    //ActionCreator就是action的创建器，用来创建action
    add(){
      return {type:ADD}
    },
    sub(){
       return {type:SUB}
    }
}