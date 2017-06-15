import React,{Component} from 'react';
export default class Filter extends Component{
    render(){
        return (
            <div  style={{border:'5px solid blue'}}>
                <button>全部</button>
                <button>未完成</button>
                <button>已完成</button>
            </div>
        )
    }
}