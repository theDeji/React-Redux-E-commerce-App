import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cart from './components/Cart'
import Home from './components/Home'
import ItemList from './components/ItemList'
import Item from './components/Item'
import PrivateRoute from './components/PrivateRoute';
import store from './store'
import LoggerContextProvider from './contexts/Logger';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <LoggerContextProvider>
              <Route path='/Cart' component={ Cart } />
              <Route exact path='/' component={ Home } />
              <PrivateRoute path='/ItemList' component={ ItemList } />
            </LoggerContextProvider>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
