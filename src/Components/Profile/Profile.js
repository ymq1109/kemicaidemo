import React, { Component } from 'react'
import './Profile.css'
import { Carousel,Button, WhiteSpace } from 'antd-mobile';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src:[
                "http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1537957782265_1.png",
                "http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1517217578193_1.png",
                "http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1544691542366_1.png"
            ]
        }
    }
    loadRegister=()=>{
        this.props.history.push('/register');
      }
      loadLogin=()=>{
          this.props.history.push('/login')
      }
    render() {
        return (
            <div className="Profile">
                <div className="Title">
                    <i className="iconfont icon-kefu"></i>
                    我的
                <i className="iconfont icon-shezhi"></i>
                </div>
                <div className="Content">
                    <div className="Imag">
                            <Carousel
                                autoplay={true}
                                infinite
                            >
                                {this.state.src.map((item,index) => (
                                        <img 
                                        src={item} 
                                        alt=""
                                        />
                                ))}
                            </Carousel>
                    </div>
                    <div className="BTN">
                        <span>网易邮箱账号可直接登录</span>
                        <Button type="warning" onClick={this.loadLogin}>登录</Button><WhiteSpace />
                        <h4 onClick={this.loadRegister}>没有账号？快速注册登录></h4>
                    </div>
                    <div className="OtherBTN">
                        <span>-----------------其他登录方式-----------------</span>
                        <div>
                        <i className="iconfont icon-weixin"></i>
                            微信登录
                            </div>
                            <div>
                        <i className="iconfont icon-QQ"></i>
                            QQ登录
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile