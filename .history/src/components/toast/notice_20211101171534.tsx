import React, {
    FC, ReactNode
} from 'react'

interface INotice {
    duration?: number,
    content?: ReactNode,
    onClose?: () => void,
    type: 'loading'| 'html'|'success'| 'warning'| 'error',
    destroy: () => void
}

const Notice:FC<INotice> = () => {

}

export default Notice