import React,{Component} from 'react';
import * as actionTypes from '../store/action-types';
//connect 连接自己的UI组件和redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../store/actions/todos';
class Todos extends Component{
    handleKeyDown = (event)=>{
        let content = event.target.value;
        if(event.keyCode == 13 && content!=null && content.length>0){
            this.props.addTodo(content);
            event.target.value = '';
        }
    }
    render(){
        return (
            <div style={{border:'5px solid red'}}>
                <input type="text" onKeyDown={this.handleKeyDown}/>
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
//输出 dispatch=store.dispatch
let mapDispatchToProps = dispatch => (
    //bindActionCreators用来实现将action创建函数和dispatch绑定
    bindActionCreators(todoActions,dispatch)
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);