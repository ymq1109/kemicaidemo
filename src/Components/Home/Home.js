import React,{Component,Fragment} from 'react'
import './Home.css'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            lottery:[
                {name:'双色球',imgurl:require("./caipiao/1.ssq@2x.png"),subtitle:'暂停销售'},
                {name:'大乐透',imgurl:require("./caipiao/2.dlt@2x.png"),subtitle:'奖池超72亿'},
                {name:'福彩开奖直播',imgurl:require("./caipiao/3.fckj.png"),subtitle:'官方授权，每晚21:15'},
                {name:'11选5系列',imgurl:require("./caipiao/4.11xuan5.png"),subtitle:'查看历史开奖'},
                {name:'快3系列',imgurl:require("./caipiao/5.kuai3.png"),subtitle:'查看历史开奖'},
                {name:'3D',imgurl:require("./caipiao/6d@2x.jpeg"),subtitle:'暂停销售'},
                {name:'足球单场',imgurl:require("./caipiao/7.danchang.png"),subtitle:'暂停销售'},
                {name:'体彩开奖直播',imgurl:require("./caipiao/8.tckjzb.png"),subtitle:'暂停销售'},
                {name:'彩票资讯',imgurl:require("./caipiao/9.zx.png"),subtitle:'暂停销售'},
                {name:'七星彩',imgurl:require("./caipiao/10.qixc.png"),subtitle:'暂停销售'},
                {name:'七乐彩',imgurl:require("./caipiao/11qilecai.png"),subtitle:'暂停销售'},
                {name:'排列5',imgurl:require("./caipiao/12pailie.png"),subtitle:'暂停销售'},
                {name:'排列3',imgurl:require("./caipiao/13pailie3.png"),subtitle:'暂停销售'},
                {name:'幸运选号',imgurl:require("./caipiao/14xyh.jpg"),subtitle:'暂停销售'},
                {name:'足球比分直播',imgurl:require("./caipiao/15zqzb.png"),subtitle:'有态度看直播'},
                {name:'篮球比分直播',imgurl:require("./caipiao/16lqzb.png"),subtitle:'经常赛事实况'},
                {name:'彩票预测',imgurl:require("./caipiao/17cpyc.png"),subtitle:'易友中奖必看'},
                {name:'更多彩种',imgurl:require("./caipiao/18genguduo.png"),subtitle:'查看开奖情况'}
            ]
        }

    }
    render(){
        return(
            <div className="Home">
                <header className="Title">可米彩票</header>
                <content className="Content">
                        {
                            this.state.lottery.map((lottery)=>{
                                return(
                                    <Fragment>
                                        <div>
                                            <div className="Imag">
                                        <img src={lottery.imgurl}/>
                                            </div>
                                            <div className="Font">
                                        <h4>{lottery.name}</h4>
                                        <span>{lottery.subtitle}</span>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                </content>
                
            </div>
        )
    }
}
export default Home