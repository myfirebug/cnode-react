import React, {useEffect, useState} from 'react'
import Ajax from '../../service'

const Home:React.FC = () => {
    const [params, setParams] = useState({
        page: 1,
        tab: '',
        limit: 10
    })
    useEffect(() => {
        Ajax.getTopics({
            page: 1
        })
        .then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div>我是首页哦</div>
    )
}

export default Home
