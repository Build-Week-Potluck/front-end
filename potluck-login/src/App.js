import './App.css';
import React, {useState} from 'react';
import { Route, Link} from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register"



const Logout = () =>{
  console.log("Logout")
}
function App() {
  const [organizer, setOrganizer] = useState({
    group:"",
    organizer:"",
    email:"",
    date:"",
    theme:""
  });
  
  const [error, setError] = useState("");
  
  const UserLogin = details => {
    console.log(details);
  }
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
