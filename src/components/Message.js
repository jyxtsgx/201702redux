import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Message extends Component {
    render() {
        return (
            <li>{this.props.message}<button onClick={()=>this.context.del(this.props.index)}>-</button></li>
        )
    }
}
//规定当前组件从祖先组件
Message.contextTypes = {
    del:PropTypes.func
}

export default  Message