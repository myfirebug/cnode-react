import React from "react";
import Home from "./page/home";
import Counter from "./page/counter";
import Loading from "./components/loading";

function App() {
  return (
    <div className="App">
      <Home />
      <Counter />
      <Loading />
    </div>
  );
}

export default App;
