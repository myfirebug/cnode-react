/*
 * @Author: hejp
 * @Date:   16:43
 * @Last Modified by:   hejp
 * @Last Modified time: 16:43
 */
import {
    get,
    post
} from './fetch'

export default {
    getTopics(params) {
        return get('/topics', params, 'api')
    },
    getDetails(id) {
        return get(`/topic/${id}`, {},'api')
    },
    login(params) {
        return post('/accesstoken', params,'api')
    },
    user(username) {
        return get(`/user/${username}`, '','api')
    },
    collect(params) {
        return post('/topic_collect/collect', params,'api')
    },
    de_collect(params) {
        return post('/topic_collect/de_collect ', params,'api')
    },
    myCollect(username) {
        return get(`/topic_collect/${username}`, '','api')
    }
}
