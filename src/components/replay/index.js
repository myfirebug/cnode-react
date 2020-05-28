/*
 * @Author: hejp
 * @Date:   16:19
 * @Last Modified by:   hejp
 * @Last Modified time: 16:19
 */
import React, {
    memo
} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import ReplayList from './ReplayList'

export const ReplayWrapper = memo(({ list, userInfo }) => {
    return (
        <div className="cn-replay">
            <div className="cn-replay__hd">
                共{ list.length }条回复
            </div>
            <div className="cn-replay__bd">
                <ReplayList list={list} userInfo={userInfo} />
            </div>
        </div>
    )
})

ReplayWrapper.propTypes = {
    list: PropTypes.array.isRequired,
    userInfo: PropTypes.object.isRequired
}

export default ReplayWrapper
