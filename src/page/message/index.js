/*
 * @Author: hejp
 * @Date:   16:38
 * @Last Modified by:   hejp
 * @Last Modified time: 16:38
 */
import React, {
    memo,
    useEffect
} from 'react'
import {connect} from 'react-redux';
import { getMessages } from '../../store/actions/message'
import './index.scss'
import Footer from "../../components/footer"
import {
    Link
} from 'react-router-dom'

const Message = memo(({ messages, getMessages }) => {
    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <div className="cn-message">
            {
                    messages.hasnot_read_messages
                    && messages.hasnot_read_messages.map(item => (
                        <div
                            key={item.id}
                            className="cn-message__item ui-border-b">
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
                    ))
                }
                {
                    messages.has_read_messages
                    && messages.has_read_messages.map(item => (
                        <div
                            key={item.id}
                            className="cn-message__item ui-border-b">
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
                    ))
                }
            </div>
            <Footer hash='/message' />
        </>
    )
})

const messageProps = state => ({
    messages: state.messages
})

export default connect(
    messageProps,
    {
        getMessages
    }
)(Message)
