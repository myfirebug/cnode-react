/*
 * @Author: hejp
 * @Date:   17:39
 * @Last Modified by:   hejp
 * @Last Modified time: 17:39
 */
import React, {
    useState,
    memo
} from 'react'
import './index.scss'

import PropTypes from 'prop-types'

const Header = memo(({ tabChangeHandler, tab }) => {
    const [tabs] = useState([{
        name: '全部',
        value: ''
    },{
        name: '精华',
        value: 'good'
    },{
        name: '分享',
        value: 'share'
    },{
        name: '问答',
        value: 'ask'
    },{
        name: '招聘',
        value: 'job'
    },{
        name: '客户端',
        value: 'dev'
    }])
    return (
        <header className="cn-header">
            <ul className="cn-tabs__list">
                {
                    tabs.map((item, index) => (
                        <li
                            onClick={() => tabChangeHandler(item.value)}
                            className={['cn-tabs__item', tab === item.value ? 'is-active' : ''].join(' ')}
                            key={index}>
                            { item.name }
                        </li>
                    ))
                }
            </ul>
        </header>
    )
})
Header.propTypes = {
    tabChangeHandler: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired
}
export default Header
