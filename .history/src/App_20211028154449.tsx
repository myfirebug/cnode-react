import React from "react";
import Loading from "./components/loading";
import Router from '@src/router'

function App() {
  return (
    <div className="App">
      <Loading />
      <Router />
    </div>
  );
}

export default App;
