import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </div>
  );
}

export default App;
