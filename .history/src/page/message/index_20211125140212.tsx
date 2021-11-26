import React, { FC } from "react";
import Footer from "@src/components/footer";
import useURLLoader from "@src/hook/useURLLoader";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";
import "./index.scss";

interface IMessageProps {
    token: string;
}

const Message: FC<IMessageProps> = ({token}) => {
  // 数据
  const { data, loading } = useURLLoader(
    "getMessages",
    JSON.stringify({ accesstoken: token }),
    Boolean(token)
  );
  return (
    <div className="sz-message">
      <Footer value="message" />
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.userInfo.token,
});

export default connect(mapStateToProps)(Message);
