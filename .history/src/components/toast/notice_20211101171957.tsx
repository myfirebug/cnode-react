import React, {
    FC, ReactNode,
    useState
} from 'react'
import classNames from 'classnames'

const map = {
    loading: '&#xeb01;',
    html: '',
    success: '&#xe61e;',
    warning: '&#xe62f;',
    error: '&#xe622;'
  }

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
    type="loading",
    destroy
}) => {
    const [visible, setVisible] = useState(true)
    const classes = classNames('sz-toast', {
        [` sz-toast__${type}`]: type,
    }, visible ? ' is-show' : ' is-hide')
    return (
        <div className={classes}>
            <span
            dangerouslySetInnerHTML={{
                __html: map[type]
              }}
            className="sz-icon"
            ></span>
            {content}
        </div>
    )
}

export default Notice