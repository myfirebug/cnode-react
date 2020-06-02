/*
 * @Author: hejp
 * @Date:   16:05
 * @Last Modified by:   hejp
 * @Last Modified time: 16:05
 */
import React, {
    memo,
    useEffect
} from 'react'
import {connect} from 'react-redux';
import {
    getUserCollects
} from '../../store/actions/collect'
import TopicsList from '../../components/topics/TopicsList'
import {
    getUrl
} from '../../util'
import PropTypes from 'prop-types'


const Collect = memo(({getUserCollects, topics }) => {
    useEffect(() => {
        getUserCollects(getUrl('username'))
    }, [])
    return (
        <TopicsList topics={topics} style={{
            padding: 0
        }} />
    )
})
Collect.propTypes = {
    topics: PropTypes.array.isRequired,
    getUserCollects: PropTypes.func.isRequired
}


const collectState = state => ({
    topics: state.collects
})

export default connect(
    collectState,
    {
        getUserCollects
    }
)(Collect)

