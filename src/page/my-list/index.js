/*
 * @Author: hejp
 * @Date:   14:17
 * @Last Modified by:   hejp
 * @Last Modified time: 14:17
 */
import React, {
    memo,
    useState,
    useEffect
} from 'react'
// 列表
import TopicsList from '../../components/topics/TopicsList'

const MyList = memo((props) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        const state = props.location.state
        if (state && state.data) {
            sessionStorage.setItem('MYLIST', JSON.stringify(state.data))
            setTopics(state.data)
        } else {
            setTopics(JSON.parse(sessionStorage.getItem('MYLIST')))
        }
    }, [props.location.state])
    return (
        <TopicsList topics={topics} style={{
            padding: 0
        }} />
    )
})

export default MyList
