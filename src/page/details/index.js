/*
 * @Author: hejp
 * @Date:   14:44
 * @Last Modified by:   hejp
 * @Last Modified time: 14:44
 */
import React, {
    memo,
    useEffect,
    useCallback
} from 'react'
import {connect} from 'react-redux';
import {
    getUrl,
    fmtDate
} from '../../util';
import {
    getDetails,
    setOrCancelCommentLike,
    setCommentDelete
} from '../../store/actions/details'
import {
    setOrCancelCollect
} from '../../store/actions/collect'
import './index.scss'
import ReplayWrapper from '../../components/replay'
// 详情骨架屏
import SkeletonDetails from '../../skeleton/Details'
import PropTypes from 'prop-types'
import {
    Toast
} from 'antd-mobile'


const Details = memo(({details, getDetails, userInfo, setOrCancelCommentLike, setCommentDelete, setOrCancelCollect }) => {
    useEffect(() => {
        getDetails(getUrl('id'))
    }, [getDetails])
    const operationHandler = useCallback((type) => {
        switch (type) {
            case 'comments':
                Toast.info('功能正在开发中')
                break
            case 'collection':
                setOrCancelCollect({
                    accesstoken: userInfo.token,
                    topic_id: details.id
                })
                break
            default:
        }
    }, [details, userInfo])
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
                               setCommentDelete={setCommentDelete}
                               setOrCancelCommentLike={setOrCancelCommentLike}
                               list={details.replies}
                               userInfo={userInfo}>
                           </ReplayWrapper>
                       }
                       {
                           userInfo.token
                           && userInfo.id ?
                               <div className="cn-details__ft">
                            <span
                                className="comments"
                                onClick={() => operationHandler('comments')}>
                                评论
                            </span>
                                   <span
                                       className="collection"
                                       onClick={() => operationHandler('collection')}>
                               { details.is_collect ? '取消' : '' }
                                       收藏
                           </span>
                               </div> : null
                       }
                   </div> : <SkeletonDetails />
            }
        </>
    )
})

Details.propTypes = {
    details: PropTypes.object.isRequired,
    getDetails: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
    setOrCancelCommentLike: PropTypes.func.isRequired,
    setCommentDelete: PropTypes.func.isRequired
}

const detailsState = state => ({
    details: state.details,
    userInfo: state.userInfo
})

export default connect(
    detailsState,
    {
        getDetails,
        setOrCancelCommentLike,
        setCommentDelete,
        setOrCancelCollect
    }
)(Details)
