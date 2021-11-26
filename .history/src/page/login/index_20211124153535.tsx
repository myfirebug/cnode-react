import React, { FC, useState } from "react";
import { Input, Button, List, ListItem, Toast } from "@src/packages";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ALL_STATE } from "@store/type";
import { decrement, increment } from "@store/actions/counter";
import "./index.scss";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  const [accesstoken, setAccesstoken] = useState<any>('')
  const login = () => {
    if (!accesstoken) {
      Toast({
        type: 'html',
        content: '请输入accessToken'
      })
    }
  }
  return (
    <div className="sz-login">
      <List>
        <ListItem>
          <p>欢迎来到CODE社会</p>
        </ListItem>
        <ListItem>
          <Input　placeholder="请输入accessToken" onChange={e => setAccesstoken(e.target.value)} />
        </ListItem>
        <ListItem>
          <Button block color="primary" onClick={login}>登录</Button>
        </ListItem>
      </List>
    </div>
  );
};


const mapStateToProps = (state: ALL_STATE) => ({
  counterValue: state.counter,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
