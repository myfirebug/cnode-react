/*
 * @Author: hejp
 * @Date:   17:56
 * @Last Modified by:   hejp
 * @Last Modified time: 17:56
 */
import React, {
    useEffect,
    memo
} from 'react'
import './index.scss'
import {
    Link
} from 'react-router-dom'
import {connect} from 'react-redux';
import { getUserCenterInfo } from '../../store/actions/my'
import {
    loginOut
} from '../../store/actions/userInfo'
import Footer from "../../components/footer"
import {
    getUrl
} from '../../util'

const My = memo(({ user, getUserCenterInfo, userInfo, loginOut, ...rest }) => {
    console.log(rest)
    const {
        loginname,
        avatar_url,
        score,
        recent_replies,
        recent_topics
    } = user

    useEffect(() => {
        getUserCenterInfo(getUrl('username'))
    }, [])
    return (
        <>
            <div className="cn-my">
            <div className="cn-my__hd ui-border-b">
                <div className="user-avatar">
                    <img src={avatar_url} alt={loginname}/>
                </div>
                <div className="user-info">
                    {
                        loginname ?
                        <p className="user-name">{loginname}</p> :
                        <Link className="user-name" to={{
                            pathname: '/login',
                            state: { from: '/my' }
                        }}>登录</Link>
                    }
                    <p className="integral">积分：{score || 0}</p>
                </div>
            </div>
            <ul className="cn-my__bd ui-border-t">
                <li className="cn-my__item ui-border-b">
                    <Link to={{
                        pathname: '/my-list',
                        state: {
                            data: recent_replies
                        }
                    }}>最新创建的话题</Link>
                </li>
                <li className="cn-my__item ui-border-b">
                    <Link to={{
                        pathname: '/my-list',
                        state: {
                            data: recent_topics
                        }
                    }}>最近参与的话题</Link>
                </li>
                <li className="cn-my__item ui-border-b">
                        <Link to={{
                            pathname: '/collect',
                            search: `username=${loginname}`
                        }}>{ loginname === userInfo.loginname && !!userInfo.loginname ? '我' : '他' }收藏的</Link>
                    </li>
                
            </ul>
            {
                !!userInfo.loginname &&
                loginname === userInfo.loginname ?
                <div className="cn-my__ft ui-border-tb" onClick={() => loginOut()}>退出登录</div> : 
                null
            }
        </div>
            {
                !!userInfo.loginname &&
                loginname === userInfo.loginname ?
                <Footer hash='/my' /> : null
            }
        </>
    )
})



const userProps = state => ({
    user: state.user,
    userInfo: state.userInfo
})

export default connect(
    userProps,
    {
        getUserCenterInfo,
        loginOut
    }
)(My)

