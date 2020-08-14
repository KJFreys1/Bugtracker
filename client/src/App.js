import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
    </div>
  );
}

export default App;
