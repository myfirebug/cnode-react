/*
 * @Author: hejp
 * @Date:   11:06
 * @Last Modified by:   hejp
 * @Last Modified time: 11:06
 */
import React, {
    memo
} from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

const List = memo(({ style }) => {
    const list = [0, 0, 0, 0, 0, 0]
    return (
        <div style={style}>
            {
                list.map((item, index) => (
                    <ContentLoader
                        key={index}
                        width="100%"
                        speed={1}
                        backgroundColor={'#eee'}
                        foregroundColor={'#f5f5f5'}
                        viewBox="0 0 380 110"
                    >
                        {/* Only SVG shapes */}
                        <rect x="48" y="8" width="88" height="6" rx="3"></rect>
                        <rect x="48" y="26" width="52" height="6" rx="3"></rect>
                        <rect x="0" y="56" width="380" height="12" rx="6"></rect>
                        <rect x="0" y="78" width="300" height="6" rx="3"></rect>
                        <rect x="0" y="100" width="380" height="0.5"></rect>
                        <circle cx="20" cy="20" r="20"></circle>
                    </ContentLoader>
                ))
            }
        </div>
    )
})
List.propTypes = {
    style: PropTypes.object
}

export default List
