/*
 * @Author: hejp
 * @Date:   19:14
 * @Last Modified by:   hejp
 * @Last Modified time: 19:14
 */
import {
    useState,
    useEffect
} from 'react'

const useHash = () => {
    const [hash, setHash] = useState('/home')
    const hashChangeHandler = () => {
        // 这里主要处理进入不同路由时，组件未加载完，显示相对应的骨架屏
        setHash(window.location.hash)
    }
    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler)
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler)
        }
    })

    return hash
}

export default useHash
