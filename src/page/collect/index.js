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


const Collect = memo(({userInfo, getUserCollects, topics }) => {
    useEffect(() => {
        getUserCollects(userInfo.loginname)
    }, [userInfo])
    return (
        <TopicsList topics={topics} style={{
            padding: 0
        }} />
    )
})

const collectState = state => ({
    userInfo: state.userInfo,
    topics: state.collects
})

export default connect(
    collectState,
    {
        getUserCollects
    }
)(Collect)

