/*
 * @Author: hejp
 * @Date:   14:44
 * @Last Modified by:   hejp
 * @Last Modified time: 14:44
 */
import React, {
    memo,
    useEffect
} from 'react'
import {connect} from 'react-redux';
import {
    getUrl,
    fmtDate
} from '../../util';
import { getDetails } from '../../store/actions/details'
import './index.scss'
import ReplayWrapper from '../../components/replay'
// 详情骨架屏
import SkeletonDetails from '../../skeleton/Details'
import PropTypes from 'prop-types'


const Details = memo(({ details, getDetails, userInfo }) => {
    useEffect(() => {
        getDetails(getUrl('id'))
    }, [getDetails])
    return (
        <>
            {
               JSON.stringify(details) !== '{}' ?
                   <div className="cn-details">
                       <div className="cn-details__hd ui-border-b">
                           <h1 className="title">{ details.title }</h1>
                           <div className="info">
                        <span>
                            <i className="ued-mobile">&#xe666;</i>
                            {details.reply_count}
                        </span>
                               <span>
                            <i className="ued-mobile">&#xe637;</i>
                                   {details.visit_count}
                        </span>
                               <span>
                            <i className="ued-mobile">&#xe78b;</i>
                                   {fmtDate(new Date(details.last_reply_at), 'yyyy-MM-dd hh:ss:mm')}
                        </span>
                           </div>
                       </div>
                       <div
                           className="cn-details__bd"
                           dangerouslySetInnerHTML={{__html: `${details.content}`}}>
                       </div>
                       {
                           details.replies
                               && details.replies.length
                               && <ReplayWrapper
                               list={details.replies}
                               userInfo={userInfo}>
                           </ReplayWrapper>
                       }
                       <div className="cn-details__ft"></div>
                   </div> : <SkeletonDetails />
            }
        </>
    )
})

Details.propTypes = {
    details: PropTypes.object.isRequired,
    getDetails: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired
}

const detailsState = state => ({
    details: state.details,
    userInfo: state.userInfo
})

export default connect(
    detailsState,
    {
        getDetails
    }
)(Details)
