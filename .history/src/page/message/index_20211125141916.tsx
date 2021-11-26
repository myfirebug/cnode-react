import React, { FC } from "react";
import Footer from "@src/components/footer";
import useURLLoader from "@src/hook/useURLLoader";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";
import { Skeleton } from "@src/packages";
import {MessageItem, IMessageItemProps} from './components/messageItem'
import "./index.scss";

interface IMessageProps {
  token: string;
}

const Message: FC<IMessageProps> = ({ token }) => {
  console.log(token < "token");
  // 数据
  const { data, loading } = useURLLoader(
    "getMessages",
    JSON.stringify({ accesstoken: token }),
    !Boolean(token)
  );
  return (
    <>
      {loading ? (
        <Skeleton image={{ show: false }} rows={5} />
      ) : (
        <div className="sz-message">
           {
               data.has_read_messages ?
               data.has_read_messages.map((item:IMessageItemProps) => (
                   <MessageItem {...item}/>
               ))
           }
          <Footer value="message" />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.userInfo.token,
});

export default connect(mapStateToProps)(Message);
