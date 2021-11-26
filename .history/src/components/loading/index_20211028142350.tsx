import React, { memo } from "react";

interface ILoading {
  text: string;
  style?: object;
}
const Loading = memo((props: ILoading) => {
  const { text, style } = props;
  return (
    <div id="js_loading" className="sz-loading__wrapper" style={style}>
      <div className="sz-loading">
        <div className="sz-loading__text">{text || "loading..."}</div>
      </div>
    </div>
  );
});

export default Loading;
