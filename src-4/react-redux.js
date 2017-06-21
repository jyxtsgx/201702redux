import React from 'react';
import  PropTypes from 'prop-types';
let connect = (mapStateToProps, mapDispatchToProps) =>
    _component => {
        //此Proxy属于高阶组件
        class Proxy extends React.Component {
            constructor(props) {
                super(props);
                this.state = {};
            }
            //在组件将要加载之前，让当前组件订阅store的状态变化事件
            componentWillMount() {
                //从上下文对象中获取store对象属性
                this.unsubscribe = this.context.store.subscribe(() => {
                    //把映射后的返回值赋给了当前Proxy组件的状态对象,由于状态变化，会重新渲染
                    this.setState(mapStateToProps(this.context.store.getState()));
                })
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
                //this.state ({number:state})
                return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
            }
        }
        Proxy.contextTypes = {
            store: PropTypes.object
        }
        return Proxy;
    }

class Provider extends React.Component {
    getChildContext() {
        return {store: this.props.store};
    }

    render() {
        return this.props.children
    }
}
Provider.childContextTypes = {
    store: PropTypes.object
}

export {connect, Provider}