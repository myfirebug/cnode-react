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

const My = memo(({ user, getUserCenterInfo, userInfo, loginOut }) => {
    const {
        score,
        recent_replies,
        recent_topics
    } = user
    const {
        loginname,
        avatar_url
    } = userInfo
    useEffect(() => {
        getUserCenterInfo(loginname)
    }, [])
    return (
        <div className="cn-my">
            <div className="cn-my__hd ui-border-b">
                <div className="user-avatar">
                    <img src={avatar_url} alt={loginname}/>
                </div>
                <div className="user-info">
                    <p className="user-name">{loginname || 'username'}</p>
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
                        pathname: '/collect'
                    }}>我收藏的</Link>
                </li>
            </ul>
            <div className="cn-my__ft ui-border-tb" onClick={() => loginOut()}>退出登录</div>
        </div>
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

