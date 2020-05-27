/*
 * @Author: hejp
 * @Date:   17:03
 * @Last Modified by:   hejp
 * @Last Modified time: 17:03
 */
import React from 'react'
import './index.scss'

const Loading = () => {
    return (
        <div id="js_loading" className="cn-loading">
            <div className="cn-loading__content">
                <div className="icon">
                    <span className="circle1"></span>
                    <span className="circle2"></span>
                    <span className="circle3"></span>
                    <span className="circle4"></span>
                    <span className="circle5"></span>
                    <span className="circle6"></span>
                    <span className="circle7"></span>
                    <span className="circle8"></span>
                    <span className="circle9"></span>
                    <span className="circle10"></span>
                    <span className="circle11"></span>
                    <span className="circle12"></span>
                </div>
                <div className="text">loading...</div>
            </div>
        </div>
    )
}

export default Loading
