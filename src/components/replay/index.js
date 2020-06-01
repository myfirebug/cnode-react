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

export const ReplayWrapper = memo((props) => {
    return (
        <div className="cn-replay">
            <div className="cn-replay__hd ui-border-tb">
                共{ props.list.length }条回复
            </div>
            <div className="cn-replay__bd">
                <ReplayList { ...props } />
            </div>
        </div>
    )
})

ReplayWrapper.propTypes = {
    list: PropTypes.array.isRequired,
    userInfo: PropTypes.object.isRequired,
    setOrCancelCommentLike: PropTypes.func.isRequired,
    setCommentDelete: PropTypes.func.isRequired
}

export default ReplayWrapper
