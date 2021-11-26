import React, {
    FC
} from 'react'
import { timeAgo } from '@src/util/tools'

export interface ITopicsItemProps {
    id: string;
    title: string;
    reply_count: number;
    visit_count: number;
    author: {
        avatar_url: string;
        loginname: string
    };
    top: boolean;
    create_at: string;
    [propNames: string]: any;
  }

const TopicsItem:FC<ITopicsItemProps> = ({
    id,
    title,
    reply_count,
    visit_count,
    author,
    top,
    create_at
}) => {
    return (
        <div className="sz-topics__item">
            <div className="sz-topics__header">
                <div className="user-avatar">
                    <img src={author.avatar_url} alt={author.loginname} />
                </div>
                <div className="user-info">
                    <p className="user-name">{author.loginname}</p>
                    <p className="create-at">{timeAgo(create_at)}</p>
                </div>
            </div>
            <div className="sz-topics__body">
                {top ? <span>置顶</span> : null}{title}
            </div>
            <div className="sz-topics__footer">
                {reply_count} {visit_count}
            </div>
        </div>
    )
}

export default TopicsItem