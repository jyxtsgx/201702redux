import React,{Component} from 'react';
import * as actionTypes from '../store/action-types';
import {connect} from 'react-redux';
/**
 * 1. UI组件 木偶 傻瓜组件
 * 2. 没有状态
 * 3. 数据都来自于属性
 */
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.add()}>+</button>
                <button onClick={()=>this.props.sub()}>-</button>
            </div>
        )
    }
}
//把状态映射为属性对象
let mapStateToProps = state=>({number:state})
//把dispatch方法映射为属性对象
let mapDispatchToProps = dispatch=>({
    add:()=>dispatch({type:actionTypes.ADD}),
    sub:()=>dispatch({type:actionTypes.SUB})
})
export default  connect(mapStateToProps,mapDispatchToProps)(Counter);