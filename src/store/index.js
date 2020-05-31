/*
 * @Author: hejp
 * @Date:   15:53
 * @Last Modified by:   hejp
 * @Last Modified time: 15:53
 */
import {
    createStore,
    applyMiddleware
} from 'redux'
// 数据持久化工具
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = [thunk]

// 判断是否是正式环境
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const persistConfig = {
    // 存储的名称
    key: 'root',
    // 存储方式
    storage: storage,
    // 某个reducer,不持久化
    // blacklist: ['counter'],
    // 需要持久化的模块
    whitelist: ['userInfo', 'topics']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default createStore(persistedReducer, applyMiddleware(...middleware));
