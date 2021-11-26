import React, { FC } from "react";

import "./index.scss";

interface ILoadingProps {
  style?: Object;
  text?: string;
}

const Loading: FC<ILoadingProps> = ({ style, text }) => {
  return (
    <div id="js_loading" className="sz-loading__wrapper" style={style}>
      <div className="sz-loading">
        
        <div className="sz-loading__text">{text || "loading..."}</div>
      </div>
    </div>
  );
};

export default Loading;
