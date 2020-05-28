/*
 * @Author: hejp
 * @Date:   16:42
 * @Last Modified by:   hejp
 * @Last Modified time: 16:42
 */
import React, {
    memo
} from 'react'
import PropTypes from 'prop-types'
import Replay from './Replay'

export const ReplayList = memo(({ list, userInfo }) => {
    return (
        <div className="cn-replay__list">
            {
                list.map((item, index) => (
                    <Replay
                        userInfo={userInfo}
                        number={index}
                        key={item.id}
                        {...item} />
                ))
            }
        </div>
    )
})

ReplayList.propTypes = {
    list: PropTypes.array.isRequired,
    userInfo: PropTypes.object.isRequired
}
export default ReplayList
