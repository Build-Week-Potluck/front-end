  import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Form, FormGroup,Label,Input,Card} from "reactstrap";
import * as yup from "yup";
import axios from "axios";




const Register= ()=> {
    const formSchema = yup.object().shape({
        fName:yup.string().required("First Name is required"),
        lName:yup.string().required("Last Name is required"),
        role:yup.string().required("Role must be required"),
      email:yup.string().email("Invalid email format").required("Email is required"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") ,
      
      
    });

    const [user,setUser] = useState({
        fName:"",
        lName:"",
        role:"",
        email:"",
        password:"",
        
    });
    
    const [error, setError] = useState({
        fName:"",
        lName:"",
        role:"",
        email:"",
        password:"",
        
    });
    
    const [disabled, setDisabled] = useState(true);



   
    const validate = e => {
        let value = e.target.value ;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setError({
                ...error,
                [e.target.name]:""
            });
            console.log(user);
        }).catch(err =>{
            setError({
                ...error,
                [e.target.name]:err.errors[0]
                
            });
            console.log(error)
        });
    };

    useEffect (()=>{
    formSchema.isValid(user)
    .then(valid => setDisabled(!valid));
   
        })
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        validate(e)
    }

        
    
   const submitHandle = (e) => {
        
        e.preventDefault();
        console.log(e.target);
       

        axios
        .post("https://reqres.in/api/users", user)
        .then(res => {
            setUser(res.data);
            console.log("completed", res.data)
          alert(`Welcome ${res.data.fName}` `${res.data.lName}`)
         
        })
        .catch(err => {
            console.log("INVALID ",err);
        });
        

    }
    
  

      return (
        <div className="Login">
        <header>
        <div className="header_container">
            <div className="logo_container">
                <h1> Plan-A-Potluck</h1>
                <img src="images/potluck_logo.jpg" alt="logo"/>
                <p>Good Times, Good Food</p>
            </div>
            <nav className="nav_container">
                <ul>
                <li><Link className="home" to="/">Home</Link></li>
                          <li><Link className="about" to="/about">About Us</Link></li>
                          <li><Link className="login" to ="/login">Login</Link></li>
                          <li><Link className="register" to ="/register">Register</Link></li>
      

                </ul>
            </nav>
        </div>
    </header>
        <div>
        <Card>
         <Form className="registerForm" onSubmit ={submitHandle} >
             <div>
                 <h1>Register Here!</h1>
                 
                 <FormGroup>
                     <Label htmlFor = "fName">First Name:</Label>
                     <Input type="text" name= "fName" id="fName" value={user.fName} onChange={handleChange} />
                     {error.fName}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "lName">Last Name:</Label>
                     <Input type="text" name= "lName" id="lName" value={user.lName} onChange={handleChange} />
                     {error.lName}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "role" name="role" id="role">Role:</Label>
                     <Input type="text" name= "role" id="role" value={user.role} onChange={handleChange} />
                     {error.role}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "email" name="email" id="email">Email:</Label>
                     <Input type="email" name= "email" id="email" value={user.email} onChange={handleChange}/>
                     {error.email}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "password" name="password" id="password">Create A Password:</Label>
                     <Input type="password" name= "password" id="password" value={user.password} onChange={handleChange} />
                     {error.password}
                 </FormGroup>
                 
                
                <button type="submit"  disabled={disabled}>Register</button>

             </div>
             </Form>   
        </Card>
        </div>
        </div>
    );
      
}
    
export default Register;