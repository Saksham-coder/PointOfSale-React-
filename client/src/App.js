import React ,{useEffect} from 'react';
import {BrowserRouter , Router, Route, Switch,Link } from 'react-router-dom'
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
import AddProduct from './components/dashboard/Product/AddProduct'
import Finalsell from './components/dashboard/Sell/Finalsell'
import ProductDetail from './components/dashboard/Product/ProductDetail'
import ReceiptDetail from './components/dashboard/Receipt/ReceiptDetail'
import './App.css';
import {connect} from 'react-redux'
import PrivateRoute from './components/routing/PrivateRoute'
import history from './components/history'
import Alert from './components/Alert'




const  App= () => {

  useEffect(() => {
      // setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <Alert />
        <Switch>
          <div>
            <div>
                <PrivateRoute exact path="/app/sell" component={Sell} />
                <PrivateRoute exact path='/app/sell/final' component={Finalsell} />
                <PrivateRoute exact path="/app/receipts" component={Receipts} />
                <PrivateRoute exact path="/app/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/app/products" component={Products} />
                <PrivateRoute exact path="/app/product/addProduct" component={AddProduct} />
                <PrivateRoute exact path="/app/products/:id" component={ProductDetail} />
                <PrivateRoute exact path="/app/receipts/:id" component={ReceiptDetail} />
            </div>
            <div>
                <Route exact path='/' component={Main}/>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Switch>
      </Router>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
