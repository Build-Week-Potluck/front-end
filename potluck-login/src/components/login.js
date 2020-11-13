import React from 'react';
import {  Form, FormGroup,Label,Input,Card,CardTitle} from "reactstrap";
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