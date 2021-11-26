import React from "react";
import Home from "./page/home";
import Counter from "./page/counter";
import Loading from "./components/loading";
import Router from '@src/router'

function App() {
  return (
    <div className="App">
      <Home />
      <Counter />
      <Loading />
      <Router />
    </div>
  );
}

export default App;
