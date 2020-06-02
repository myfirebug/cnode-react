/*
 * @Author: hejp
 * @Date:   11:21
 * @Last Modified by:   hejp
 * @Last Modified time: 11:21
 */
import React, {
    useEffect,
    useCallback
} from 'react'
import {connect} from 'react-redux';
import {
    getAllTopics,
    getTopicsParams,
    setScrollTop
} from '../../store/actions/topics'
// 头部
import Header from '../../components/header'
// 列表
import TopicsList from '../../components/topics/TopicsList'
// 是否可滚动加载
import useScollLoad from '../../hook/useScollLoad'
import PropTypes from 'prop-types'
import Footer from '../../components/footer'

const Home = ({ topics, getAllTopics, flag, getTopicsParams, params, scrollTop, setScrollTop }) => {

    const isScrollLoad = useScollLoad();

    // 判断是否滚动加载
    useEffect(() => {
        if (isScrollLoad.flag && flag) {
            getTopicsParams({
                ...params,
                page: params.page + 1
            })
        }
    }, [isScrollLoad.flag])

    // 记录scrollTop的值
    useEffect(() => {
        let timmer = null
        if (timmer) {
            clearTimeout(timmer)
        }
        timmer = setTimeout(() => {
            setScrollTop(isScrollLoad.scrollTop)
        }, 200)
        return () => {
            if (timmer) {
                clearTimeout(timmer)
            }
        }
    }, [isScrollLoad.scrollTop, setScrollTop])

    // 请求数据
    useEffect(() => {
        if (params.page === 1) {
            window.scrollTo(0, 0)
        }
        if (isScrollLoad.flag || params.page === 1) {
            getAllTopics(params)
        }
    }, [params])

    useEffect(() => {
        if (params.page !== 1) {
            window.scrollTo(0, scrollTop)
        }
    }, [])

    const tabChangeHandler = useCallback((value) => {
        getTopicsParams({
            ...params,
            page: 1,
            tab: value
        })
    }, [params])

    return (
        <>
            <Header tabChangeHandler={tabChangeHandler} tab={params.tab}></Header>
            <TopicsList topics={topics} />
            <Footer hash='/home' />
        </>
    )
}

Home.propTypes = {
    topics: PropTypes.array.isRequired,
    getAllTopics: PropTypes.func.isRequired,
    flag: PropTypes.bool.isRequired,
    getTopicsParams: PropTypes.func.isRequired,
    scrollTop: PropTypes.number.isRequired,
    setScrollTop: PropTypes.func.isRequired,
    params: PropTypes.shape({
        page: PropTypes.number.isRequired,
        tab: PropTypes.string.isRequired,
        limit: PropTypes.number.isRequired
    }).isRequired

}

const topics = state => ({
    topics: state.topics.datas,
    flag: state.topics.flag,
    params: state.topics.params,
    scrollTop: state.topics.scrollTop
})

export default connect(
    topics,
    {
        getAllTopics,
        getTopicsParams,
        setScrollTop
    }
)(Home)
