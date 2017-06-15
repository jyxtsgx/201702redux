import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../store/actions/filter';
class Filter extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                {
                   this.props.filter=='all'?<span>全部</span>:<button onClick={()=>this.props.changeFilter('all')}>全部</button>
                }
                {
                    this.props.filter=='active'?<span>未完成</span>:<button  onClick={()=>this.props.changeFilter('active')}>未完成</button>
                }
                {
                    this.props.filter=='completed'?<span>已完成</span>:<button onClick={()=>this.props.changeFilter('completed')}>已完成</button>
                }
            </div>
        )
    }
}

export default connect(
    state=>({filter:state.filter}),//把状态树映射为属性对象
    dispatch=>bindActionCreators(actions,dispatch)
)(Filter)
/**
 this.props.changeFilter('completed')
 store.dispatch({type:'CHANGE_FILTER',filter:'completed'});
 filter reducer (state,action)
 'completed'
 {todos:[],filter:'completed'}

 **/