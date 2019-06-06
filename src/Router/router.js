import React from 'react'
import {Route} from 'react-router-dom'
import loadable from '@loadable/component'



const Home=loadable(()=>import('../Components/Home/Home'))
const Profile=loadable(()=>import('../Components/Profile/Profile'))
const Award=loadable(()=>import('../Components/Award/Award'))
const OneBye=loadable(()=>import('../Components/OneBye/OneBye'))
const FindSome=loadable(()=>import('../Components/FindSome/FindSome'))
export const routes=[
    {
        path:'/home',
        component:Home,
        icon:'icon-shouye',
        name:'购彩', 
        children:[
            {path:'/home/Ssq',name:'双色球',component:loadable(()=>import('../Components/Home/Ssq'))},
            {path:'/home/BigHip',name:'大乐透',component:loadable(()=>import('../Components/Home/BigHip'))}
        ]
    },
    {path:'/onebye',icon:'icon-hongbao',name:'一元购',component:OneBye},
    {path:'/findsome',icon:'icon-faxian',name:'发现',component:FindSome},
    {path:'/award',icon:'icon-kaijiang',name:'开奖',component:Award},
    {path:'/Profile',icon:'icon-wode',name:'我的',component:Profile}

]
//配置路由信息对象，嵌套子路由
export const RouteWithSubRoute=(route)=>{
    return(
        <Route
        path={route.path}
        render={(props)=>{
            return <route.component {...props} children={route.children}/>
        }}
        >
        </Route>
    )
}