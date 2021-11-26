import React from 'react';
import './App.css';
import Home from './page/home'
import Counter from './page/counter'
import {getUrl} from './util/tools'

console.log(getUrl('name'))

function App() {
  return (
    <div className="App">
        <Home />
        <Counter />
    </div>
  );
}

export default App;
