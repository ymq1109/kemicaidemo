import React,{Component} from 'react'
import {Button, WhiteSpace } from 'antd-mobile';
import axios from 'axios'
import apis from '../../apis/apis'
import './Register.css'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            phone:''
        }
        // this.handleRegister=this.handleRegister.bind(this)
        // this.changeUsername=this.changeUsername.bind(this)
        // this.changePassword=this.changePassword.bind(this)
        // this.changeEmail=this.changeEmail.bind(this)
        // this.changePhone=this.changePhone.bind(this)

    }
    loadReturn=()=>{
        this.props.history.push('/profile')
    }
    handleRegister=()=>{
        console.log('sd')
        const userInfo={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            phone:this.state.phone
        }
        axios.post(apis.register,userInfo)
        .then((resp)=>{
            console.log("resp",resp)
            this.props.history.push('/login')
        })
        
    }
    changeUsername=(ev)=>{
        this.setState({
            username:ev.target.value
        })
    }
    changePassword=(ev)=>{
        this.setState({
            password:ev.target.value
        })
    }
    changeEmail=(ev)=>{
        this.setState({
            email:ev.target.value
        })
    }
    changePhone=(ev)=>{
        console.log(ev)
        this.setState({
            phone:ev.target.value
        })
    }
    
    render(){
        return(
            <div className="Register">
                <div className="Title">
                    <span onClick={this.loadReturn}>>返回</span>
                    <span>请填写注册信息</span>  
                </div>
                <div className="ContentRegister">
                    <div>用户名：<input type="text" placeholder="请输入用户名" onChange={this.changeUsername} value={this.state.username}/></div>
                   <div>密码：<input type="password" placeholder="情输入密码" onChange={this.changePassword} value={this.state.password} /></div> 
                    <div>邮箱：<input type="text" placeholder="请输入邮箱号" onChange={this.changeEmail} value={this.state.email}/></div>
                    <div>手机号：<input type="text" placeholder="请输入手机号" onChange={this.changePhone} value={this.state.phone}/></div>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}
export default Register