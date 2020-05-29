/*
 * @Author: hejp
 * @Date:   16:42
 * @Last Modified by:   hejp
 * @Last Modified time: 16:42
 */
import React, {
    memo
} from 'react'
import LazyLoad from 'react-lazyload'
import {
    timeAgo
} from '../../util'

export const Replay = memo((props) => {
    const {
        number,
        author: {
            avatar_url,
            loginname
        },
        create_at,
        content,
        userInfo
    } = props
    return (
        <li className="cn-replay__item ui-border-b">
            <div className="author_content">
                <div className="user-avatar">
                    <LazyLoad>
                        <img src={ avatar_url } alt="" />
                    </LazyLoad>
                </div>
                <div className="user-info">
                    <span className="user-name">{loginname}</span>
                    <span className="reply-time">{ number }楼•{timeAgo(create_at)}</span>
                </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: `${content}`}}></div>
            <div className="operation">
                {
                    userInfo.loginname !== loginname
                    && userInfo.token ?
                        <>
                            <span className="ui-border-r">
                                <i className="ued-mobile">&#xe643;</i>点赞
                            </span>
                            <span>
                                <i className="ued-mobile">&#xe6f9;</i>回复
                            </span>
                        </> : null
                }
                {
                    userInfo.loginname === loginname
                    && userInfo.token ?
                        <>
                            <span className="ui-border-r">
                                <i className="ued-mobile">&#xe78c;</i>删除
                            </span>
                            <span>
                                <i className="ued-mobile">&#xe6b9;</i>编辑
                            </span>
                        </> : null
                }
            </div>
        </li>
    )
})
export default Replay
