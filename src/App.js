import React,{Component,Fragment} from 'react';
import './App.css';
import { Carousel,Button, WhiteSpace} from 'antd-mobile';
import { BrowserRouter as Router, Route, Link,NavLink,Switch,Redirect } from "react-router-dom";
import {routes,routesL,RouteWithSubRoute} from './Router/router'

class App extends Component{
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
              },
              {
                routesL.map((item,index)=>{
                  return(
                    <RouteWithSubRoute key={item.name} {...item}/>
                  )
                })
              },
              {
                <Route path="/" render={()=>{
                   return (<Redirect to="/home"/>)   
              }}></Route>
              }
            </Switch>
            <div className='Footer'>
            {routes.map((item, index) => {
                return (<div key={item.index+item.name} 
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
