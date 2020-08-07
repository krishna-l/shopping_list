import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './Components/Menu';
import Shopper from './Components/Shopper';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        <Shopper />
      </div>
    </Provider>
  );
}

export default App;