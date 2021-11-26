import React, {
    FC
} from 'react'

import './index.scss'

interface IMessageProps {}

const Message:FC<IMessageProps> = () => {
 return (
     <div className="sz-message"></div>
 )
}

export default Message