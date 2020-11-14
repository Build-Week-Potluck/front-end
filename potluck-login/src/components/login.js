import React from 'react';
import {Link} from "react-router-dom";
import {  Form, FormGroup,Label,Input,Card} from "reactstrap";
import * as yup from "yup";

const LoginForm = (props) => {
    const formSchema = yup.object().shape({
      email:yup.string().email("Must use a valid email"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") 
    })
}


class Login extends React.Component {
    render(){
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
        <Form>
            <div>
                <h1>Login</h1>
                <FormGroup>
                    <Label htmlFor ="email">Email:</Label>
                    <Input type="email" name="email" id="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" name="password">Password:</Label>
                    <Input type="password" name="password" id="password"/>
                </FormGroup>
                <input type="submit" value="LOGIN"/>
            </div>
        </Form>
        </Card>
        </div>
        </div>
        
    );
};
}
export default Login;