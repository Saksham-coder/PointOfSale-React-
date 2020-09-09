import React ,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import {loadUser} from './actions/auth'

import Main from './components/Main'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Sell from './components/dashboard/Sell'
import Receipts from './components/dashboard/Receipts'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/dashboard/Products'
import Navbar from './components/Navbar'
import Finalsell from './components/dashboard/Sell/Finalsell'
import './App.css';


const  App= () => {

  useEffect(() => {
      // setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>

        <Switch>
          <div>
                <Route exact path="/app/sell" component={Sell} />
                <Route exact path='/app/sell/final' component={Finalsell} />
                <Route exact path="/app/receipts" component={Receipts} />
                <Route exact path="/app/dashboard" component={Dashboard} />
                <Route exact path="/app/products" component={Products} />
                <Route exact path='/' component={Main}/>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
