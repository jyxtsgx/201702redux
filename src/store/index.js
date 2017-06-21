//应用中间件
import applyMiddleware from './applyMiddleware';
//import {applyMiddleware} from 'redux';
import {createStore} from 'redux';
import reducer from './reducer';
//logger中间件 日志中间件
//任何中间件的结构都是这样的
/*let logger = store=>next=>action=>{

};*/
/*let logger = function({dispatch,getState}){
    return function(next){
        return function(action){
            console.log('改变前的状态对象:',store.getState());
            next(action);//store.dispatch(action)
            console.log('改变后的状态对象:',store.getState());
        }
    }
}*/

let thunk = ({dispatch})=>next=>action=>{
    if(typeof action == 'function')
        action(dispatch);
    else
        next(action);
}

let store = applyMiddleware(thunk)(createStore)(reducer);
export default store;