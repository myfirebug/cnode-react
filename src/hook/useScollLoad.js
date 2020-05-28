/*
 * @Author: hejp
 * @Date:   11:12
 * @Last Modified by:   hejp
 * @Last Modified time: 11:12
 */
import {
    useState,
    useEffect
} from 'react'

const useScollLoad = () => {
    const [flag, setFlag] = useState(false)

    /**
     * [获取滚动条当前的位置]
     * @return {[Number]} [scrollTop]
     */
    const getScrollTop = () => {
        let scrollTop = 0
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
            scrollTop = document.body.scrollTop
        }
        return scrollTop
    }
    /**
     * [获取当前可视范围的高度]
     * @return {[Number]} [clientHeight]
     */
    const getClientHeight = () => {
        let clientHeight = 0
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
        }
        return clientHeight
    }

    /**
     * [获取当前可视范围的高度]
     * @return {[Number]} [clientHeight]
     */
    const getScrollHeight = () => {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    /**
     * 判断是否可滚动加载
     */
    const scrollHandler = () => {
        if (getScrollTop() + getClientHeight() + 50 > getScrollHeight()) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return flag
}

export default useScollLoad
