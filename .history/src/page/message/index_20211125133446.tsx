import React, {
    FC
} from 'react'
import Footer from "@src/components/footer";
import './index.scss';


interface IMessageProps {}

const Message:FC<IMessageProps> = () => {
 return (
     <div className="sz-message">
         <Footer value="message" />
     </div>
 )
}

export default Message