import React from 'react';
import  PropTypes from 'prop-types';
let connect = (mapStateToProps,mapDispatchToProps)=>{
     return function(_component){
         //此Proxy属于高阶组件
        class Proxy extends React.Component{
            constructor(props){
                super(props);
                this.state = {};
            }
            componentWillMount(){
                //从上下文对象中获取store对象属性
                this.unsubscribe = this.context.store.subscribe(()=>{
                    this.setState(mapStateToProps(this.context.store.getState()));
                })
            }
            componentWillUnmount(){
                this.unsubscribe();
            }
            render(){
                return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
            }
        }
        Proxy.contextTypes = {
            store:PropTypes.object
        }
        return Proxy;
     }
}


export {connect}