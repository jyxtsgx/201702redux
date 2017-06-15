import React,{Component} from 'react';
import Message from './Message';
export default class MessageList extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.messages.map((message,index)=><Message key={index}  message={message} index={index}/>)
                }
            </ul>
        )
    }
}