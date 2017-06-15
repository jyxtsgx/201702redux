import React,{Component} from 'react';
import MessageList from './MessageList';
export default class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state = {messages:['a','b','c']};
    }
    render(){
        return (
            <MessageList messages={this.state.messages}/>
        )
    }
}