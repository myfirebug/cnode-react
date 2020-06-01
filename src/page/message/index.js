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
import Footer from "../../components/footer";

const Message = memo(({ messages, getMessages }) => {
    useEffect(() => {
        getMessages()
    }, [])
    console.log(messages)
    return (
        <>
            <div className="cn-message">
                <div className="cn-message__hd">
                    <span>已读</span>
                    <span>未读</span>
                </div>
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
