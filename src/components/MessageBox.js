import React,{Component} from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';
class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state = {messages:['a','b','c']};
    }
    //用于定义/返回子组件上下文对象
    getChildContext(){
      return {
          del:this.del
      }
    }

    del=(index)=>{
        this.state.messages.splice(index,1);
        this.setState({
            messages:this.state.messages
        });
    }
    render(){
        return (
            <MessageList  messages={this.state.messages}/>
        )
    }
}
//规定了当前组件的的子组件的上下文对象属性的名称和类型
MessageBox.childContextTypes = {
    del:PropTypes.func
}

export default  MessageBox