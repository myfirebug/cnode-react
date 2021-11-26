import React, {
    FC
} from 'react'

export interface ITopicsItemProps {
    id: string;
    title: string;
    reply_count: number;
    visit_count: number;
    author: {
        avatar_url: string;
        loginname: string
    };
    [propNames: string]: any;
  }

const TopicsItem:FC<ITopicsItemProps> = ({
    id
}) => {
    return (
        <div>{id}</div>
    )
}

export default TopicsItem