/*
 * @Author: hejp
 * @Date:   14:10
 * @Last Modified by:   hejp
 * @Last Modified time: 14:10
 */
import React, {
    useState
} from 'react'
import {
    Link
} from 'react-router-dom'
import useHash from '../../hook/useHash'
import './index.scss'

const Footer = () => {
    const [navList] = useState([
        {
            icon: '&#xe729;',
            name: '首页',
            path: '/home'
        },
        {
            icon: '&#xe6b9;',
            name: '发表',
            path: '/publish'
        },
        {
            icon: '&#xe68a;',
            name: '消息',
            path: '/message'
        },
        {
            icon: '&#xe6a1;',
            name: '我的',
            path: '/my'
        }
    ])
    const hash = useHash()
    return (
        <div className="cn-footer">
            <ul className="cn-nav">
                {
                    navList.map((item, index) => (
                        <li className={['cn-nav__item', hash === item.path ? 'is-active' : ''].join(' ')}
                            key={index}>
                            <Link
                                to={{
                                    pathname: item.path
                                }}
                            >
                                    <span
                                        dangerouslySetInnerHTML={{__html: `${item.icon}`}}
                                        className="ued-mobile"></span>
                                    <span className="text">{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Footer
