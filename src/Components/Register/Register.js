import React,{Component} from 'react'
import './Register.css'

class Register extends Component{
    constructor(props){
        super(props);
    }
    loadReturn=()=>{
        this.props.history.push('/profile')
    }
    
    render(){
        return(
            <div className="Register">
                <div className="Title">
                    <span onClick={this.loadReturn}>>返回</span>
                    <span>请填写注册信息</span>  
                </div>
                <div className="ContentRegister">
                    <div>用户名：<input type="text" placeholder="请输入用户名"/></div>
                   <div>密码：<input type="password" placeholder="情输入密码"/></div> 
                    <div>邮箱：<input type="text" placeholder="请输入邮箱号"/></div>
                    <div>手机号：<input type="text" placeholder="请输入手机号"/></div>
                    
                </div>
            </div>
        )
    }
}
export default Register