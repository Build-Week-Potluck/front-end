import React from 'react';
import {Col, Button, Form, FormGroup,Label,Input,Card,CardTitle,CardText,CardSubtitle} from "reactstrap";
function Login (){
    return (
        <Card>
        <Form>
            <div>
                <h2>Login</h2>
                <FormGroup>
                    <Label htmlFor ="email">Email:</Label>
                    <Input type="email" name="email" id="email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" name="password">Password:</Label>
                    <Input type="password" name="password" id="password"/>
                </FormGroup>
            </div>
        </Form>
        </Card>
    )
}

export default Login;