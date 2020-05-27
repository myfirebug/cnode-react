import React from 'react';
import 'normalize.css'
import Routers from './router'
import Loading from './components/loading'

function App() {
  return (
      <div className="app">
          <Routers />
          <Loading />
      </div>
  );
}

export default App;
