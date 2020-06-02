/*
 * @Author: hejp
 * @Date:   16:38
 * @Last Modified by:   hejp
 * @Last Modified time: 16:38
 */
import React, {
    memo,
    useEffect,
    useCallback
} from 'react'
import {connect} from 'react-redux';
import {
    getMessages,
    getMarkOne
} from '../../store/actions/message'
import './index.scss'
import Footer from "../../components/footer"
import {
    Link
} from 'react-router-dom'
// 列表骨架屏
import SkeletonList from '../../skeleton/List'
import PropTypes from 'prop-types'

const Message = memo(({ messages, getMessages, getMarkOne }) => {
    useEffect(() => {
        getMessages()
    }, [])

    const markOneHandler = useCallback((id, type) => {
        if (!type) {
            getMarkOne(id)
        }
    }, [messages])

    return (
        <>
            <div className="cn-message">
                {
                    messages.length ?
                        messages.map(item => (
                            <div
                                onClick={() => markOneHandler(item.id, item.has_read)}
                                key={item.id}
                                className={ 'cn-message__item ui-border-b ' + (!item.has_read ? 'is-notread' : '') }>
                                <Link to={{
                                    pathname: '/my',
                                    search: `username=${item.author.loginname}`
                                }}>
                                    { item.author.loginname }
                                </Link>回复了您的话题
                                <Link to={{
                                    pathname: '/details',
                                    search: `id=${item.topic.id}`
                                }}>
                                    { item.topic.title }
                                </Link>
                            </div>
                        )) :
                        <SkeletonList style={{
                            padding: '15px 15px 0 15px'
                        }} />
                }
            </div>
            <Footer hash='/message' />
        </>
    )
})

Message.propTypes = {
    messages: PropTypes.array.isRequired,
    getMessages: PropTypes.func.isRequired,
    getMarkOne: PropTypes.func.isRequired
}


const messageProps = state => ({
    messages: state.messages
})

export default connect(
    messageProps,
    {
        getMessages,
        getMarkOne
    }
)(Message)
