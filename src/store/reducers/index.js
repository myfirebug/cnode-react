/*
 * @Author: hejp
 * @Date:   16:40
 * @Last Modified by:   hejp
 * @Last Modified time: 16:40
 */
import { combineReducers } from 'redux'
import { topics } from './topics'
import { details } from './details';
import { userInfo } from './userInfo';
import { user } from './my';
import { collects } from './collect';

export default combineReducers({
    topics,
    details,
    userInfo,
    user,
    collects
})
