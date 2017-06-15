let createStore = (reducer) => {
  let state;//状态树
  let getState = () => state;
  let listeners = [];
  //订阅函数，把一个监听函数添加到数组中。
  let subscribe = listener=>{
      listeners.push(listener);
      return ()=>{
          listeners = listeners.filter(l=>l!=listener)
      }
  }
  //向仓库里发送action行为
  let dispatch = (action)=>{
      //调用reducer并传入老的状态对象和当前动作，返回新的状态对象
      state = reducer(state,action);
      listeners.forEach(l=>l());
  }
  dispatch();
  return {
      getState,
      subscribe,
      dispatch
  }
}

export {createStore}