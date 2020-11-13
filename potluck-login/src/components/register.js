import React from "react";
import { Button, Form, FormGroup,Label,Input,Card,CardTitle} from "reactstrap";
//import * as yup from "yup";
//import axios from "axios";

function Register (){
    return (
        <Card>
         <Form>
             <div>
                 <CardTitle>Register Here!</CardTitle>
                 <FormGroup>
                     <Label htmlFor = "name">Group Name:</Label>
                     <Input type="text" name= "name" id="name"/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "name" name="name" id="name">Organizer:</Label>
                     <Input type="text" name= "name" id="name"/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "email" name="email" id="email">Email:</Label>
                     <Input type="email" name= "email" id="email"/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "date" name="date" id="date">Date of Event:</Label>
                     <Input type="date" name= "date" id="date"/>
                 </FormGroup>
                 <FormGroup>
                     <Label htmlFor = "theme" name="theme" id="theme">Occasion/Theme:</Label>
                     <Input type="text" name= "theme" id="theme"/>
                 </FormGroup>
                 <Button>REGISTER</Button>
             </div>
             </Form>   
        </Card>
    )
}

export default Register;