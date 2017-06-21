//应用中间件
import applyMiddleware from './applyMiddleware';
//logger中间件 日志中间件
//任何中间件的结构都是这样的
/*let logger = store=>next=>action=>{

};*/
let logger = function(store){
    return function(next){
        return function(action){
            console.log('改变前的状态对象:',store.getState());
            next(action);//store.dispatch(action)
            console.log('改变后的状态对象:',store.getState());
        }
    }
}
import {createStore} from 'redux';
import reducer from './reducer';
let store = createStore(reducer);
export default store;