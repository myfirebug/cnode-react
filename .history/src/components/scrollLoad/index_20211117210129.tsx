import React, {
    useEffect,
  useState,
  useRef,
  useCallback,
  memo
} from 'react'

import Ajax from '../../service'

interface IScrollLoad {}

const ScrollLoad = memo((props: IScrollLoad) => {
    return (
        <div></div>
    )
})

export default ScrollLoad