import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './store/actions';
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.val}</p>
                <button onClick={()=>this.props.add()}>+</button>
                <button onClick={()=>this.props.sub()}>-</button>
            </div>
        )
    }
}

export default connect(
    state=>({val:state}),
    dispatch=>bindActionCreators(actions,dispatch)
)(Counter)

/**
 *  {
    //ActionCreator就是action的创建器，用来创建action
    add(){
      dispatch({type:ADD})
    },
    sub(){
       dispatch({type:SUB})
    }
}
 **/