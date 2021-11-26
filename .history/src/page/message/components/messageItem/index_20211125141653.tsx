import React, {
    FC
} from 'react'

import './index.scss'

export interface IMessageItemProps {
    author: {
        avatar_url: string;
        loginname: string;
    },
    create_at: string;
    has_read: boolean;
    id: string;
    reply: {
        content: string;
        create_at: string;
        id: string;
        ups: string[]
    },
    topic: {
        id: string;
        last_reply_at: string;
        title: string;
    },
    type: string;
}

const MessageItem:FC<IMessageItemProps> = () => {
    return (
        <div className="sz-message__item"></div>
    )
}

export default MessageItem