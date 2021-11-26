import React, {
    FC
} from 'react'

interface ITopicsItemProps {
    id: string
}

const TopicsItem:FC<ITopicsItemProps> = ({
    id
}) => {
    return (
        <div>{id}</div>
    )
}

export default TopicsItem