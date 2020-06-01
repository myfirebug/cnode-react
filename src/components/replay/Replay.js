/*
 * @Author: hejp
 * @Date:   16:42
 * @Last Modified by:   hejp
 * @Last Modified time: 16:42
 */
import React, {
    // memo, 在这个组件里主要是cnode不能点赞、删除、回复、评论了，所有只有自己手动模拟来完成
    useCallback
} from 'react'
import LazyLoad from 'react-lazyload'
import {
    timeAgo
} from '../../util'
import {
    Toast
} from 'antd-mobile'

export const Replay = (props) => {
    const {
        id,
        number,
        author: {
            avatar_url,
            loginname
        },
        create_at,
        content,
        userInfo,
        ups,
        setOrCancelCommentLike,
        setCommentDelete
    } = props

    const operationHandler = useCallback((type) => {
        switch(type) {
            case 'delete':
                setCommentDelete({
                    userId: userInfo.id,
                    replayId: id
                })
                break
            case 'like':
                setOrCancelCommentLike({
                    userId: userInfo.id,
                    replayId: id
                })
                break
            case 'edit':
                Toast.info('功能正在开发中', 1.5)
                break
            case 'reply':
                Toast.info('功能正在开发中', 1.5)
                break
            default:
                break
        }
    }, [])

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
            {
                userInfo.id && userInfo.token &&
                <div className="operation">
                    {
                        userInfo.loginname === loginname
                        && userInfo.token ?
                            <>
                                <span onClick={() => operationHandler('delete')}>
                                    <i className="ued-mobile">&#xe78c;</i>
                                    删除
                                </span>
                                <span onClick={() => operationHandler('edit')}>
                                    <i className="ued-mobile">&#xe6b9;</i>
                                    编辑
                                </span>
                            </> : null
                    }
                    <span onClick={() => operationHandler('like')}>
                        <i className="ued-mobile">&#xe643;</i>
                        {
                            ups.indexOf(userInfo.id) !== -1 ? '取消' : ''
                        }
                        点赞({ups.length})
                    </span>
                    <span onClick={() => operationHandler('reply')}>
                        <i className="ued-mobile">&#xe6f9;</i>
                        回复
                    </span>
                </div>
            }
        </li>
    )
}
export default Replay
