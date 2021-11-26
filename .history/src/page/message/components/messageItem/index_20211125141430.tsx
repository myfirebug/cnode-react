import React, {
    FC
} from 'react'

import './index.scss'

interface IMessageItemProps {}

const MessageItem:FC<IMessageItemProps> = () => {
    return (
        <div className="sz-message__item"></div>
    )
}

export default MessageItem