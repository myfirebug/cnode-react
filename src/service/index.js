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
    }
}
