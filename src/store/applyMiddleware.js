export default function (ware){//ware就是中间件
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
          ware = ware(wareApi);
          dispatch = ware(store.dispatch);
          return {
              ...store,
              dispatch
          }
      }
   }
}