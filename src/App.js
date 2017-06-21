import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './store/actions';
class App extends Component{
    handleChange = (event)=>{
        //联想的关键字
        let wd = event.target.value;
        this.props.fetchWords(wd);
    }
    render(){
        return (
            <div className="container">
               <div className="logo">
                   <img src="https://www.baidu.com/img/bd_logo1.png"/>
               </div>
               <div className="search">
                   <input onChange={this.handleChange} type="text"/>
                   <button>百度一下</button>
               </div>
               <ul className="words">
                   {
                       this.props.words.map((word,index)=><li key={index}><a href={"https://www.baidu.com/s?wd="+word}>{word}</a></li>)
                   }
               </ul>
            </div>
        )
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actions,dispatch)
)
(App)