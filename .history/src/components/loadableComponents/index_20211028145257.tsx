/*
 * @Author: hejp
 * @Date:   14:20
 * @Last Modified by:   hejp
 * @Last Modified time: 14:20
 */
import React from 'react'
import Loadable from 'react-loadable'
import Load from '@components/loading'

import skeleton from './skeleton'
import { IAnyObject } from '@src/types'

/**
 * 获取页面路由地址
 * @param str
 * @param first
 * @param end
 * @returns {string}
 */
const getStr = (str: string, first: string, end: string): string => {
  if (typeof str !== 'string') {
    return ''
  }
  const firstIndex = str.indexOf(first)
  const endIndex = str.indexOf(end)
  if (firstIndex === -1 || endIndex === -1) {
    return ''
  }
  return str.substring(firstIndex + first.length, endIndex)
}

const Loading = (props: IAnyObject) => {
  if (props.error) {
    // window.location.reload()
    return null
  } else {
    return (
      <div>
        <Load
          style={{
            display: 'block'
          }}
          text="资源加载中..." />
        {
          !skeleton[props.skeleton] ?
            <img src={`./skeleton/${props.skeleton}.jpg`} style={{
              width: '100vw',
              height: '100vh'
            }} alt=""/> : null
        }
      </div>
    )
  }
}

const Packing = (loader: any) => {
  // 首次骨架屏需要展示的图片名称
  const skeleton = getStr(loader.toString(), './src/page/', '/index.js')
  return Loadable({
    loader,
    loading(props) {
      return (
        <Loading
          skeleton={skeleton}
          {...props}/>
      )
    },
    delay: 300
  })
}


export default Packing
