export default function (...wares){//ware就是中间件
   return function(createStore){//原生的创建仓库
      return function(reducer){
          //先得到原始的store
          let store = createStore(reducer);
          //声明一个变量指向老的dispatch
          let dispatch = store.dispatch;
          let wareApi = {
              getState:store.getState,
              dispatch:(action)=>dispatch(action)
          }
          wares.map(ware=>ware(wareApi));
          dispatch = compose(...wares)(store.dispatch);
          return {
              ...store,
              dispatch
          }
      }
   }
}

function compose(...fns){
    return function(n){
        return fns.reduceRight((val,fn)=>{
            return fn(val)
        },n);
    }
}