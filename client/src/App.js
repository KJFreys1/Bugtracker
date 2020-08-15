import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Dashboard from './components/Main/Dashboard/Dashboard'
import Details from './components/Main/Details/Details'

function App() {
  const [user, setUser] = useState({})

  const getUser = ({ email }) => {
    setUser({
      email
    })
  }

  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact render={props => <Login {...props} getUser={getUser} />} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact render={props => <Dashboard {...props} userInfo={user} />} />
      <Route path="/project/:pid" component={Details} />
    </div>
  );
}

export default App;
