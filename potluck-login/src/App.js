import './App.css';
import React from 'react';
import { Route,Switch} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import About from "./components/about";


function App (){
  return (
    <div className ="App">
           <Switch>
       <Route exact path ="/">
       <Home/>
       </Route>
      <Route path ="/register">
      <Register/>
      </Route>
      
      <Route path="/about">
      <About/>
      </Route> 
      <Route path="/login">
      <Login/>
      </Route> 

</Switch>
    </div>
    
  );
}
     

        

     
      
  
    
  

export default App;
