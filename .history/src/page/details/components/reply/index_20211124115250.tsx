import React, {
    FC
} from "react";

interface IReplyProps {
    id: string;
    content: string;
    create_at: string;
    is_uped: boolean;
    reply_id: any;
    author: {
        loginname: string;
        avatar_url: string;
    },
    ups: string[]
}

const Reply:FC<IReplyProps> = () => {
    return (
        <div className="sz-replay__item"></div>
    )
}

export default Reply