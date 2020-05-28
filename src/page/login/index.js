/*
 * @Author: hejp
 * @Date:   17:56
 * @Last Modified by:   hejp
 * @Last Modified time: 17:56
 */
import React, {
    useState,
    useCallback,
    useEffect,
    memo
} from 'react'
import {connect} from 'react-redux';
import { getUserInfo } from '../../store/actions/userInfo'
import {createHashHistory} from 'history';
import PropTypes from 'prop-types'
import './index.scss'

const Login = memo(({ accessToken, getUserInfo, location }) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (accessToken) {
            createHashHistory().push({
                pathname: '/home'
            })
        }
    }, [])

    const getToken = useCallback((e) => {
        setToken(e.target.value)
    }, [])

    const submitHanlder = useCallback(() => {
        if (token) {
            getUserInfo(token, (location.state && location.state.from) ? location.state.from : '/home')
        }
    }, [token])

    return (
        <div className="cn-login">
            <div className="cn-login__wrapper">
                <h1 className="title">欢迎来到CNODE社区</h1>
                <div className="cn-login__form">
                    <div className="cn-login__item">
                        <input
                            type="text"
                            onChange={getToken}
                            placeholder="请输入accessToken"
                            value={token}/>
                    </div>
                    <div className="cn-login__item">
                        <button
                            onClick={submitHanlder}
                        >登录</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

Login.propTypes = {
    accessToken: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired
}


const topics = state => ({
    accessToken: state.userInfo.token
})

export default connect(
    topics,
    {
        getUserInfo
    }
)(Login)


