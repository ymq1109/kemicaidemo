import React,{Component} from 'react'
import './Login.css'
import axios from 'axios'
import apis from '../../apis/apis'
import { Button  } from 'antd-mobile';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handlegoback=()=>{
        this.props.history.push('/profile')
    }
    handlereturn=()=>{
        this.props.history.push('/register')
    }
    loadLogin=()=>{
        const loginValue=this.state.username
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        let loginType=''
        if(Number(loginValue)){
            loginType='phone'
        }else if(reg.test(loginValue)){
            loginType='email'
        }else{
            loginType='username'
        }
        const password=this.state.password
        const userinfo={
            loginType,
            loginValue,
            password
        }
        axios.post(apis.login,userinfo)
        .then((resp)=>{
            console.log("loginresp",resp)
            if(resp.data.success){
                this.props.history.push('/home')
            }
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
    render(){
        return(
            <div className="Login">
                <div className="Title">
                    <span>登录</span>
                    <span onClick={this.handlegoback}> 返回> </span>
                </div>
                <div className="ContentLogin">
                    <div>请选择登录方式：<input type="text" placeholder="用户名/邮箱/手机号码" onChange={this.changeUsername} value={this.username}/></div>
                    <div>密码：<input type="password" placeholder="请输入密码" onChange={this.changePassword} value={this.password} /></div>
                    <Button type="warning" onClick={this.loadLogin}>登录</Button>
                </div>
                <div className="footer">
                    <span>忘记密码？</span>
                    <span onClick={this.handlereturn}>未注册？点我先去注册吧></span>

                </div>
            </div>
        )
    }
}
export default Login