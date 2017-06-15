import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import store from './store';
import {Provider} from 'react-redux';
//Provider可以让所有的子组件拿到store
ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>
    ,document.querySelector('#root'));