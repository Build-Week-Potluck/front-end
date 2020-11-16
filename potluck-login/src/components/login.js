import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {  Form, FormGroup,Label,Input,Card} from "reactstrap";


const Login =()=> {
    const initialValues = {email:"", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

   
        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmitting(true);
        };
        const validate = (values) => {
            let errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if(!values.email){
                errors.email =  "Cannot be blank";
            }else if (!regex.test(values.email)){
                errors.email = "Invalid email format";
            }
            if(!values.password){
                errors.password = "Cannot be blank";
            }else if (values.password.length <8){
                errors.password = "Password must be more than 8 characters";
            }
            return errors;
        };
        useEffect(()=>{
            if (Object.keys(formErrors).length === 0 &&  isSubmitting){
                const  submitForm = () => {
                    console.log(formValues);
                }
                submitForm();
            }
        }, [formErrors, isSubmitting,formValues]);
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
    <h1>Sign In</h1>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
            <span className = "success-msg">Signed in succesfully</span>
        )}
        <Card>
        <Form onSubmit={handleSubmit} noValidate>
            <div>
                <h1>Login</h1>
                <FormGroup>
                    <Label htmlFor ="email">Email:</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    id="email"
                     value={formValues.email} 
                     onChange={handleChange}
                     className = {formErrors.email && "input-error"}
                     />
                     {formErrors.email && (
                         <span className = "error">{formErrors.email}</span>
                     )}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" name="password">Password:</Label>
                    <Input 
                    type="password" 
                    name="password" 
                    id="password"
                    value = {formValues.password}
                    onChange={handleChange}
                    className= {formErrors.password && "input-error"}
                    />
                    {formErrors.password && (
                         <span className = "error">{formErrors.password}</span>
                     )}
                </FormGroup>
                <input type="submit" value="LOGIN"/>
            </div>
        </Form>
        </Card>
        </div>
        </div>
        
    );
};

export default Login;