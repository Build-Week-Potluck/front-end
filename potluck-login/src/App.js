import './App.css';
import React from 'react';
import {Route, Link} from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register"

function App() {
  return (
    <div className="App">
      <nav className="header">
        <h1 className = "logo"> Potluck Planner</h1>
        <div className= "links">
          <Link className ="register" to = "/register"><button>Register</button></Link>
          <Link className="login" to="/login"><button>Login</button></Link>
        </div>
      </nav>
      <Route path ="/register" component={Register}/>
      <Route path="/login" component={Login}/>
  
    </div>
  );
};

export default App;
