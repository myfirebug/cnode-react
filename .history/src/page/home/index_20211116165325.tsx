import React, {useEffect} from 'react'
import Ajax from '../../service'

const Home:React.FC = () => {
    useEffect(() => {
        typeof Ajax.getTopics
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
