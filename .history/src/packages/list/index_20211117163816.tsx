import React, {
    FC,
    CSSProperties,
    ReactElement
} from 'react';
import classNames from 'classnames';
import {IListItemProps} from './listItem';
import './style/index.scss'

interface IListProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactElement | ReactElement[];
}

const List:FC<IListProps> = ({className, style, children}) => {

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<IListItemProps>
            const { name } = childElement.type
            if (name === 'ListItem') {
              return React.cloneElement(childElement)
            } else {
              console.error("Warning: List has a child which is not a ListItem component")
            }
          })
    }

    const classes = classNames('sz-list', className)
    return (
        <div
        style={style}
        className={classes}>
            {renderChildren()}
        </div>
    )
}

export default List