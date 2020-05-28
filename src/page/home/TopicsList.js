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

const TopicsList = memo(({ topics }) => {
    return (
        <ul className="cn-topics-list">
            {
                topics.map(item => (
                    <Topic
                        key={item.id}
                        { ...item }
                    ></Topic>
                ))
            }
        </ul>
    )
})

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            loginname: PropTypes.string.isRequired
        }).isRequired,
        create_at: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        reply_count: PropTypes.number.isRequired,
        visit_count: PropTypes.number.isRequired,
        last_reply_at: PropTypes.string.isRequired
    })).isRequired
}

export default TopicsList
