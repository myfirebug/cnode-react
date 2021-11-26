import React, { FC } from "react";
import Footer from "@src/components/footer";
import useURLLoader from "@src/hook/useURLLoader";
import "./index.scss";

interface IMessageProps {}

const Message: FC<IMessageProps> = () => {
  // 数据
  const { data, loading } = useURLLoader("getMessages", JSON.stringify({accesstoken: 12}, false));
  return (
    <div className="sz-message">
      <Footer value="message" />
    </div>
  );
};

export default Message;
