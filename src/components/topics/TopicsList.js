/*
 * @Author: hejp
 * @Date:   9:30
 * @Last Modified by:   hejp
 * @Last Modified time: 9:30
 */
import React, {
    memo
} from 'react'
import Topic from './Topic'
import PropTypes from 'prop-types'
import './index.scss'
// 列表骨架屏
import SkeletonList from '../../skeleton/List'

const TopicsList = memo(({ topics, style }) => {
    return (
        <>
            {
                topics.length ?
                    <ul className="cn-topics-list" style={style}>
                        {
                            topics.map(item => (
                                <Topic
                                    key={item.id}
                                    { ...item }
                                ></Topic>
                            ))
                        }
                    </ul> :
                    <SkeletonList style={{
                        padding: '15px 15px 0 15px'
                    }} />
            }
        </>
    )
})

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            loginname: PropTypes.string.isRequired
        }).isRequired,
        create_at: PropTypes.string,
        title: PropTypes.string.isRequired,
        reply_count: PropTypes.number,
        visit_count: PropTypes.number,
        last_reply_at: PropTypes.string.isRequired,
        style: PropTypes.object
    })).isRequired
}

export default TopicsList
