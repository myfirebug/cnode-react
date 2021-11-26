import React, {
    FC,
    useState
} from 'react'

interface ITabProps {}

const Tab:FC<ITabProps> = () => {
    const [data] = useState([
        {
            name: '全部',
            value: ''
        },
        {
            name: '问答',
            value: 'ask'
        },
        {
            name: '分享',
            value: 'share'
        },
        {
            name: '招聘',
            value: 'job'
        },
        {
            name: '精华',
            value: 'good'
        },
        {
            name: '测试',
            value: 'dev'
        }
    ])
    return (
        <div className="sz-tab"></div>
    )
}

export default Tab