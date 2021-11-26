import React, {
    FC, ReactNode,
    useState
} from 'react'
import classNames from 'classnames'

interface INotice {
    duration?: number,
    content?: ReactNode,
    onClose?: () => void,
    type?: 'loading'| 'html'|'success'| 'warning'| 'error',
    destroy?: () => void
}

const Notice:FC<INotice> = ({
    duration,
    content,
    onClose,
    type,
    destroy
}) => {
    const [visible, setVisible] = useState(true)
    const classes = classNames('sz-toast', {
        [` sz-toast__${type}`]: type,

    })
}

export default Notice