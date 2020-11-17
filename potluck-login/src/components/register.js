import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Form, FormGroup,Label,Input,Card} from "reactstrap";
import * as yup from "yup";
import axios from "axios";




const Register= ()=> {
    const formSchema = yup.object().shape({
        group:yup.string(),
        organizer:yup.string().required("Organizer must be required"),
      email:yup.string().email("Invalid email format"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") ,
      
    });

    const [user,setUser] = useState({
        group:"",
        organizer:"",
        email:"",
        password:""
    });
    
    const [error, setError] = useState({
        group:"",
        organizer:"",
        email:"",
        password:""
    });

    const validate = e => {
        let value = e.target.type ==="";
        yup.reach(formSchema, e.target.value)
        .validate(value)
        .then(valid => {
            setError({
                ...error,
                [e.target.name]:""
            });
        }).catch(err =>{
            setError({
                ...error,
                [e.target.name]:err.errors[0]
            });
        });
    };
    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.type === "";
        setUser({ ...user, [e.target.value]: value });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");
    
        axios
        .post("https://reqres.in/api/users", user)
        .then(res => {
            setUser(res.data);
            console.log("completed", res);
        })
        .catch(err => console.log(err));
    };
    
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
         <Form className="registerForm" onSubmit={formSubmit} >
             <div>
                 <h1>Register Here!</h1>
                 <FormGroup>
                     <Label htmlFor = "name">Group Name:</Label>
                     <Input type="text" name= "name" id="name" value={user.name} onChange={inputChange} />
                     
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "name1" name="name1" id="name">Organizer:</Label>
                     <Input type="text" name= "name1" id="name1" value={user.name} onChange={inputChange}/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "email" name="email" id="email">Email:</Label>
                     <Input type="email" name= "email" id="email" value={user.email} onChange={inputChange}/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "password" name="password" id="password">Create A Password:</Label>
                     <Input type="password" name= "password" id="password" value={user.password} onChange={inputChange}/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "password1" name="password1" id="password">Confirm Password:</Label>
                     <Input type="password" name= "password1" id="1"/>
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