import React from 'react';
import './App.css';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link,NavLink,Switch } from "react-router-dom";
import {routes,RouteWithSubRoute} from './Router/router'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:'购彩'
    }
  }
  pushView=(item)=>{
    this.setState({
      title: item.name
    })
  }
    render() {
      return (    
      <div className="App"> 
        <Router>
        <Switch>
              {
                routes.map((item,index)=>{
                    return (
                      <RouteWithSubRoute key={item.name} {...item}/>
                    )
                })
              }
            </Switch>
            <div className='Footer'>
            {routes.map((item, index) => {
                return (<div key={item.index} 
                  onClick={this.pushView.bind(this,item)}
                >
            <NavLink to={item.path} >
            <i className={"iconfont "+item.icon}></i> 
              {item.name} </NavLink>
           </div>);
        })}
            </div>
        </Router>
      </div>
      
      )
    }
  }


export default App;
