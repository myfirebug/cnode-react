/*
 * @Author: hejp
 * @Date:   9:46
 * @Last Modified by:   hejp
 * @Last Modified time: 9:46
 */
import React, {
    memo,
    useMemo
} from 'react'
import {
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import {
    fmtDate
} from '../../util'

const Topic = memo((props) => {
    const {
        id,
        author: {
            avatar_url,
            loginname
        },
        create_at,
        title,
        reply_count,
        visit_count,
        last_reply_at,
        tab,
        good,
        top
    } = props

    const getLabel = useMemo(() => {
        let str = ''
        if (good) {
            str = '精华'
        } else if (top) {
            str = '置顶'
        } else {
            switch (tab) {
                case 'share':
                    str = '分享'
                    break
                case 'ask':
                    str = '问答'
                    break
                case 'job':
                    str = '招聘'
                    break
                default:
                    str = '暂无'
            }
        }
        return str
    }, [good, tab, top])

    return (
        <li className="cn-topics-item">
            <Link className="ui-border-b" to={{
                pathname: '/details',
                search: `id=${id}`
            }}>
                <div className="cn-topics-item__hd">
                    <div className="user-avatar">
                        <LazyLoad key={id}>
                            <img src={ avatar_url } alt="头像"/>
                        </LazyLoad>
                    </div>
                    <div className="user-info">
                        <p className="user-name">{ loginname }</p>
                        <p className="create-at">{ fmtDate(new Date(create_at), 'yyyy-MM-dd hh:ss:mm') }</p>
                    </div>
                </div>
                <div className="cn-topics-item__bd">
                    <span className="put-top">{ getLabel }</span>
                    { title }
                </div>
                <div className="cn-topics-item__ft">
                    <span>
                        <i className="ued-mobile">&#xe666;</i>
                        { reply_count }
                     </span>
                    <span>
                        <i className="ued-mobile">&#xe637;</i>
                        { visit_count }
                    </span>
                    <span>
                        <i className="ued-mobile">&#xe78b;</i>
                        { fmtDate(new Date(last_reply_at), 'yyyy-MM-dd hh:ss:mm') }
                    </span>
                </div>
            </Link>
        </li>
    )
})

Topic.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        loginname: PropTypes.string.isRequired
    }).isRequired,
    create_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    reply_count: PropTypes.number.isRequired,
    visit_count: PropTypes.number.isRequired,
    last_reply_at: PropTypes.string.isRequired
}

export default Topic
