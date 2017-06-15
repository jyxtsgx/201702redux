import React,{Component} from 'react';
import Todos from './Todos';
import Filter from './Filter';
export default class TodoApp extends Component{
    render(){
        return (
            <div  style={{border:'5px solid green'}}>
                <Todos/>
                <Filter/>
            </div>
        )
    }
}