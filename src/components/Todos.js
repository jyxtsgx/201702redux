import React,{Component} from 'react';
import * as actionTypes from '../store/action-types';
//connect 连接自己的UI组件和redux store
import {connect} from 'react-redux';
class Todos extends Component{
    render(){
        return (
            <div style={{border:'5px solid red'}}>
                <input type="text"/>
                <ul>
                    {
                        this.props.todos.map((todo,index)=><li key={index}>{todo.content}</li>)
                    }
                </ul>
            </div>
        )
    }
}
//connect有两个参数 一个负责输入 一个负责输出
//把store的状态对象映射为当前组件属性 参数是state tree
//返回值是传入此组件的属性对象
let mapStateToProps = state=>(
    {todos:state.todos}
)
//输出
let mapDispatchToProps = dispatch => (
    {
        addTodo:(content)=>dispatch({type:actionTypes.ADD_TODO,content})
    }
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);