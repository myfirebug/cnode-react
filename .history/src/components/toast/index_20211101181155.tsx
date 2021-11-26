/*
 * @Author: hejp
 * @Date:   10:17
 * @Last Modified by:   hejp
 * @Last Modified time: 10:17
 */
import { ITokenAction } from '@src/store/actions/token'
import React, {
    useState,
    useEffect
} from 'react'
import { ReactNode } from '_@types_react@17.0.33@@types/react'

interface IToastProps {
 content?: ReactNode,
 time?: number
}

const ToastComponent: React.FC<ITokenAction> = (props) => {
    return (
        <div></div>
    )
}

export default ToastComponent