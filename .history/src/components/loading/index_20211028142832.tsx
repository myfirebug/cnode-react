import React from "react";

interface ILoading {
  text: string;
  style?: object;
}
const Loading: React.FC<ILoading> = ({ text, style }) => {
  return (
    <div id="js_loading" className="sz-loading__wrapper" style={style}>
      <div className="sz-loading">
        <div className="sz-loading__text">{text}</div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  text: 'loading...'
}

export default Loading;
