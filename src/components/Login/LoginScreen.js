import "./Login.css" ;
import {Button,Form,Container,Row,Col} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  // useEffect(() => {
  //   axios.
  // },[])

  return (
    <Container className="loginApp m-5">
    <Form>
  <Form.Group as={Row} className="mb-3 mt-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="Email" onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
        setPass(e.target.value)
    }} />
    </Col>
        </Form.Group>
    <Button variant="primary" className="mb-3" type="submit">
        Submit 
    </Button>
</Form>
    </Container>

  );
}

export default Login;