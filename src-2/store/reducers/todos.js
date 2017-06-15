import * as actionTypes from '../action-types';
//此处的state只是todos组件需要的state
export default function(state=[],action={}){
  switch (action.type){
      case actionTypes.ADD_TODO:
          return [...state,{id:Date.now(),content:action.content,completed:false}];
      case actionTypes.DEL_TODO:
          return state.filter(todo=>todo.id != action.id);
      //切换ID对应的todo的完成状态
      case actionTypes.TOGGLE_TODO:
          return state.map(todo=>{
              if(todo.id == action.id)
                  todo.completed = !todo.completed;
              return todo;
          })
      default:
          return state;
  }
}