
import React, { useEffect } from 'react'
import './App.css';
import Layout from './components/Layouts';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLoggedIn } from './actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
}, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path='/' component={Home} exact/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
