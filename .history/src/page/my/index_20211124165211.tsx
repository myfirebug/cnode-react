import React, {
    FC
} from 'react'
import {List, ListItem} from '@src/packages'
interface IMyProps {}

const My:FC<IMyProps> = () => {
    return (
        <div className="sz-my">
            <List>
            <ListItem>
                    <div>123</div>
                </ListItem>
                <ListItem>
                    <div>123</div>
                </ListItem>
                <ListItem>
                    <div>123</div>
                </ListItem>
            </List>
        </div>
    )
}

export default My