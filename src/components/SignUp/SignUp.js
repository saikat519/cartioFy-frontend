import React, { useState } from 'react';
import {Button,Form,Container,Row,Col} from 'react-bootstrap';
import Axios from '../../Axios';
import Cookies from 'js-cookie';


function Signup() {
    const [email, setEmail] = useState(null);
    const [pass1, setPass1] = useState(null);
    const [pass2, setPass2] = useState(null);
  
  const submitHandler = () => {
    Axios({
      method: 'post',
      url: '/api/register',
      data: {
        username: email,
        password: pass1
      }
    }).then((res) => {
      console.log(res)
      Cookies.remove("Authtoken")
      Cookies.set("Authtoken",res.data.token,{ expires: 5 })
    }).catch(err => {
      console.log(err)
    })
      
  }

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
    }} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
        setPass1(e.target.value)
    }}/>
    </Col>
  </Form.Group>
        
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Confirm Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>{
        setPass2(e.target.value)
    }} />
    </Col>
  </Form.Group>
    <Button variant="primary" className="mb-3" onClick={submitHandler}>
        SignUp
    </Button>
      </Form>
      
    </Container>

  );
}

export default Signup;