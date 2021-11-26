import React, {FC} from 'react'
import {Input, List, ListItem} from '../../packages/index'
interface ILoginProps {}

const Login:FC<ILoginProps> = () => {
    return (
        <div className="ds-login">
            <List>
                <ListItem>
                    <Input placeholder="请输入用户名" />
                </ListItem>
            </List>
        </div>
    )
}

export default Login