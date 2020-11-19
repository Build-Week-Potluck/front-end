  import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Form, FormGroup,Label,Input,Card} from "reactstrap";
import * as yup from "yup";
import axios from "axios";




const Register= ()=> {
    const formSchema = yup.object().shape({
        fName:yup.string().required("First Name is required"),
        lName:yup.string().required("Last Name is required"),
        role:yup.string().required("Role must be required"),
      email:yup.string().email("Invalid email format"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") ,
      date:yup.date(),
      theme:yup.string()
    });

    const [user,setUser] = useState({
        fName:"",
        lName:"",
        role:"",
        email:"",
        password:"",
        date:"",
        theme:""
    });
    
    const [error, setError] = useState({
        fName:"",
        lName:"",
        role:"",
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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        validate(e)
    }
    const submitHandle = (e) => {
        e.preventDefault();
        
        axios
        .post("https://reqres.in/api/users", user)
        .then(res => {
            setUser(res.data);
            console.log("completed", res)
          alert(`Welcome ${res.data.fName}`)
          console.log(res.data.user)
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
         <Form className="registerForm"   onSubmit = {submitHandle}>
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
                 
                 <FormGroup>
                     <Label htmlFor = "date" name="date" id="date">Date of Event:</Label>
                     <Input type="date" name= "date" id="date" onChange={handleChange}/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "theme" name="theme" id="theme">Occasion/Theme:</Label>
                     <Input type="text" name= "theme" id="theme" onChange={handleChange}/>
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