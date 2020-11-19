import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'
import ItemList from './components/ItemList'
import store from './store'


function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <Header />
            <Route path='/Cart' component={ Cart } />
            <Route exact path='/' component={ Home } />
            <Route path='/ItemList' component={ ItemList } />
          </Router>
        </Provider>
    </div>
  );
}

export default App;
