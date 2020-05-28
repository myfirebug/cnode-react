/*
 * @Author: hejp
 * @Date:   16:17
 * @Last Modified by:   hejp
 * @Last Modified time: 16:17
 */
import * as types from '../actionType'
import Ajax from '../../service'

const details = data => ({
    type: types.DETAILS,
    data
})

export const  getDetails = id => dispatch => {
    Ajax.getDetails(id)
        .then(res => {
            dispatch(details(res.data))
        })
}
