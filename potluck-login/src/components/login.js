import React from 'react';
import {  Form, FormGroup,Label,Input,Card,CardTitle} from "reactstrap";
import * as yup from "yup";

const LoginForm = (props) => {
    const formSchema = yup.object().shape({
      email:yup.string().email("Must use a valid email"),
      password:yup.string().min(8, "Must be at least 8 characters long").required ("Password is a required field") 
    })
}


function Login (){
    return (
        <Card>
        <Form>
            <div>
                <CardTitle>Login</CardTitle>
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
    )
}

export default Login;