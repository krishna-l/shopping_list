import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './Components/Menu';
import Shopper from './Components/Shopper';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Shopper/>
    </div>
  );
}

export default App;