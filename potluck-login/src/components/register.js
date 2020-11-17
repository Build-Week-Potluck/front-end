import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Form, FormGroup,Label,Input,Card} from "reactstrap";
import * as yup from "yup";
import axios from "axios";




const Register= ()=> {
    const formSchema = yup.object().shape({
        name:yup.string(),
        organizer:yup.string().required("Organizer must be required"),
      email:yup.string().email("Invalid email format"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") ,
      
    });

    const [user,setUser] = useState({
        name:"",
        organizer:"",
        email:"",
        password:"",
        date:"",
        theme:""
    });
    
    const [error, setError] = useState({
        name:"",
        organizer:"",
        email:"",
        password:"",
        date:"",
        theme:""
    });

    const validate = e => {
        let value = e.target.value ;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setError({
                ...error,
                [e.target.name]:""
            });
            console.log(error);
        }).catch(err =>{
            setError({
                ...error,
                [e.target.name]:err.errors[0]
            });
        });
    };
    const inputChange = e => {
       // console.log(e);
        e.persist();
        validate(e);
        
        setUser({ ...user, [e.target.name]: e.target.value});
    };
    
    const [submit, setSubmit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        setError(validate(user));
        setSubmit(true);
    }
    
    
   axios
   .post("https://reqres.in/api/users", user)
   .then(res => {
       setUser(res.data);
       console.log("completed", res);
   })
   .catch((err)=>{
       console.log(err);
   })

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
         <Form className="registerForm" onSubmit={handleSubmit} >
             <div>
                 <h1>Register Here!</h1>
                 
                 <FormGroup>
                     <Label htmlFor = "name">Group Name:</Label>
                     <Input type="text" name= "name" id="name" value={user.name} onChange={inputChange} />
                     
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "organizer" name="organizer" id="name">Organizer:</Label>
                     <Input type="text" name= "organizer" id="name1" value={user.organizer} onChange={inputChange}/>
                     {error.organizer}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "email" name="email" id="email">Email:</Label>
                     <Input type="email" name= "email" id="email" value={user.email} onChange={inputChange}/>
                     {error.email}
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "password" name="password" id="password">Create A Password:</Label>
                     <Input type="password" name= "password" id="password" value={user.password} onChange={inputChange}/>
                     {error.password}
                 </FormGroup>
                 
                 <FormGroup>
                     <Label htmlFor = "date" name="date" id="date">Date of Event:</Label>
                     <Input type="date" name= "date" id="date"/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "theme" name="theme" id="theme">Occasion/Theme:</Label>
                     <Input type="text" name= "theme" id="theme"/>
                 </FormGroup>
                 <input type="submit" value="REGISTER"/>
             </div>
             </Form>   
        </Card>
        </div>
        </div>
    );
      }
      

export default Register;