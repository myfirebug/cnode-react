import React, {FC} from 'react'
import {Input, List, ListItem} from '@packages/index'
interface ILoginProps {}

const Login:FC<ILoginProps> = () => {
    return (
        <div className="ds-login">
            <List>
                <ListItem>
                    <Input />
                </ListItem>
            </List>
        </div>
    )
}

export default Login