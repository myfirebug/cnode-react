/*
 * @Author: hejp
 * @Date:   11:19
 * @Last Modified by:   hejp
 * @Last Modified time: 11:19
 */
import React from 'react'
import ContentLoader from 'react-content-loader'
const Details = () => {
    return (
        <div style={{ padding:'.3rem' }}>
            <ContentLoader
                width="100%"
                speed={1}
                backgroundColor={'#eee'}
                foregroundColor={'#f5f5f5'}
                viewBox="0 0 380 342"
            >
                {/* Only SVG shapes */}
                <rect x="0" y="8" width="100%" height="12" rx="6"></rect>
                <rect x="0" y="26" width="140" height="12" rx="6"></rect>
                <rect x="0" y="60" width="300" height="6" rx="3"></rect>
                <rect x="0" y="90" width="380" height="0.5" rx="1"></rect>
                <rect x="0" y="110" width="380" height="200" rx="5"></rect>
                <rect x="0" y="320" width="380" height="6" rx="3"></rect>
                <rect x="0" y="336" width="100" height="6" rx="3"></rect>
            </ContentLoader>
        </div>
    )
}

export default Details
