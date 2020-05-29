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
import {
    getAllTopics,
    getTabActive
} from '../../store/actions/topics'
// 头部
import Header from '../../components/header'
// 列表
import TopicsList from './TopicsList'
// 是否可滚动加载
import useScollLoad from '../../hook/useScollLoad'
import PropTypes from 'prop-types'
// 列表骨架屏
import SkeletonList from '../../skeleton/List'
import './index.scss'

const Home = ({ topics, getAllTopics, flag, getTabActive, tab }) => {
    const [params, setParams] = useState({
        page: 1,
        tab: tab,
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
        if (params.page === 1) {
            window.scrollTo(0, 0)
        }
        getAllTopics(params)
    }, [params, getAllTopics])

    const tabChangeHandler = useCallback((value) => {
        getTabActive(value)
        setParams({
            ...params,
            page: 1,
            tab: value
        })
    }, [params])

    return (
        <>
            <Header tabChangeHandler={tabChangeHandler} tab={tab}></Header>
            {
                topics.length ?
                    <TopicsList topics={topics}></TopicsList> :
                    <SkeletonList style={{
                        padding: '55px 15px 0 15px'
                    }} />
            }
        </>
    )
}

Home.propTypes = {
    topics: PropTypes.array.isRequired,
    getAllTopics: PropTypes.func.isRequired,
    flag: PropTypes.bool.isRequired,
    getTabActive: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired
}

const topics = state => ({
    topics: state.topics.datas,
    flag: state.topics.flag,
    tab: state.topics.tab
})

export default connect(
    topics,
    {
        getAllTopics,
        getTabActive
    }
)(Home)
