/*
 * @Author: hejp
 * @Date:   11:21
 * @Last Modified by:   hejp
 * @Last Modified time: 11:21
 */
import React, {
    useState,
    useEffect,
    useCallback
} from 'react'
import {connect} from 'react-redux';
import { getAllTopics } from '../../store/actions/topics'
import Header from '../../components/header'

const Home = ({ topics, getAllTopics }) => {
    const [params, setParams] = useState({
        page: 1,
        tab: '',
        limit: 10
    })

    useEffect(() => {
        getAllTopics(params)
    }, [params, getAllTopics])

    const tabChangeHandler = useCallback((value) => {
        setParams({
            ...params,
            page: 1,
            tab: value
        })
    }, [params])

    return (
        <>
            <Header tabChangeHandler={tabChangeHandler} tab={params.tab}></Header>
        </>
    )
}

const topics = state => ({
    topics: state.topics
})

export default connect(
    topics,
    {
        getAllTopics
    }
)(Home)
