import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from "react-router-dom";


import store from './store'
// import LoggerContextProvider from './contexts/Logger';
import Hero from '../src/components/Hero'
import Meals from '../src/components/Meals'
import { GlobalStyle } from './globalStyles';
import Footer from '../src/components/Footer'
import Login from '../src/components/Login'
import SignUp from '../src/components/SignUp';
import Cart from '../src/components/Cart';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <GlobalStyle />
          <Router>
            <Route exact path='/' component={ Hero } />
            <Route path='/Meals' component={ Meals } />
            <Route path='/Login' component={ Login } />
            <Route path='/Signup' component={ SignUp } />
            <Route path='/Cart' component={ Cart } />
            <Footer />
          </Router>
          
            {/* <LoggerContextProvider>
              <Route path='/Cart' component={ Cart } />
              <Route exact path='/' component={ Home } />
              <PrivateRoute path='/ItemList' component={ ItemList } />
            </LoggerContextProvider> */}
        </Provider>
    </div>
  );
}

export default App;
