import React from 'react';
import Routers from './router'
import Loading from './components/loading'
import './assets/scss/base/layout.scss'

function App() {
  return (
      <div className="app">
          <Routers />
          <Loading />
      </div>
  );
}

export default App;
