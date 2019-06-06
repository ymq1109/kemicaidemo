import React,{Component} from 'react'
import './Profile.css'
class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Profile">
                <div className="Title"> 
                <i className="iconfont icon-kefu"></i>
                我的
                <i className="iconfont icon-shezhi"></i>
                </div>
                <div className="Content">

                </div>
                
                
            </div>
        )
    }
}
export default Profile