/*
 * @Author: hejp
 * @Date:   16:44
 * @Last Modified by:   hejp
 * @Last Modified time: 16:44
 */
import {
    MESSAGES,
    MARK_ONE
} from '../actionType'

export const messages = (state = [], action) => {
    switch (action.type) {
        case MESSAGES:
            return [
                ...action.data.hasnot_read_messages,
                ...action.data.has_read_messages
            ]
        case MARK_ONE:
            const index = state.findIndex((item) => {
                return item.id === action.id
            })
            if (index >= 0) {
                state[index].has_read = true
            }
            return [
                ...state
            ]
        default:
            return state

    }
}
