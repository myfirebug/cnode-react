import React, {
    FC
} from 'react'

import './index.scss'

interface IMessageProps {}

const Message:FC<IMessageProps> = () => {
 return (
     <div className="sz-message">123</div>
 )
}

export default Message