import React, {FC} from "react";
import Router from '@src/router';
import { connect } from "react-redux";
import { ALL_STATE, THEME_STATE } from "@store/type";
import { setTheme } from "@store/actions/theme";

interface IAppProps {
  theme: THEME_STATE;
  setTheme: (theme: THEME_STATE) => void;
}

const App:FC<IAppProps> =({
  theme,
  setTheme
}) => {
  return (
    <div className="App">
      <Router />
    </div>
  );
}


const mapStateToProps = (state: ALL_STATE) => ({
  theme: state.theme,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
