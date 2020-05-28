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
// 头部
import Header from '../../components/header'
// 列表
import TopicsList from './TopicsList'
// 是否可滚动加载
import useScollLoad from '../../hook/useScollLoad'
import PropTypes from 'prop-types'
import './index.scss'

const Home = ({ topics, getAllTopics, flag, ...rest }) => {
    console.log(rest, 'restrestrestrest')
    const [params, setParams] = useState({
        page: 1,
        tab: '',
        limit: 10
    })
    const isScrollLoad = useScollLoad();

    useEffect(() => {
        if (isScrollLoad && flag) {
            setParams({
                ...params,
                page: params.page + 1
            })
        }
    }, [isScrollLoad])

    useEffect(() => {
        // 让滚动条滚动到顶部
        if (params.page === 1) {
            window.scrollTo(0, 0)
        }
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
            <TopicsList topics={topics}></TopicsList>
        </>
    )
}

Home.propTypes = {
    topics: PropTypes.array.isRequired,
    getAllTopics: PropTypes.func.isRequired,
    flag: PropTypes.bool.isRequired
}

const topics = state => ({
    topics: state.topics.datas,
    flag: state.topics.flag
})

export default connect(
    topics,
    {
        getAllTopics
    }
)(Home)
