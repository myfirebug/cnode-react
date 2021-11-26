import React, {FC, useEffect} from "react";
import Router from '@src/router';
import { connect } from "react-redux";
import { ALL_STATE, THEME_STATE } from "@store/type";
import THEME_DATAS from './theme'

interface IAppProps {
  theme: THEME_STATE
}

const App:FC<IAppProps> =({
  theme
}) => {
  useEffect(() => {
    const themeRoot = document.getElementById('theme');
    if (theme.value && themeRoot) {
      themeRoot.innerHTML = THEME_DATAS[theme.value]
    }
  }, [theme.value])
  return (
    <div className="App">
      <Router />
    </div>
  );
}


const mapStateToProps = (state: ALL_STATE) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(App);
