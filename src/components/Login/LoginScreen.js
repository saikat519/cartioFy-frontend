import "./Login.css" ;
import {Button,Form,Container,Row,Col} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import Axios from '../../Axios';
import Cookies from 'js-cookie';
import { useStateValue } from "../../StateProvider"; 

function Login() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [{ user_id }, dispatch] = useStateValue();

  var isAuthenticated = async () => {
    //console.log("api called")
    let authtoken = Cookies.get('Authtoken')
    //console.log("authtoken>>>>>", authtoken)
    await Axios.get('/api/login', {
      params: {
        token: authtoken
      }
    })
      .then(res => {
        //console.log(">res>",res)
        dispatch({
          type: "SET_USER",
          user_id: res.data.user_id,
        });
    }).catch(err => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    isAuthenticated();
  },[]);

  const submitHandler = async() => {
    Axios({
      method: 'post',
      url: '/api/login',
      data: {
        username: email,
        password: pass
      }
    }).then((response) => {
      console.log(response)
      if (response.data.message) {
        console.log(response.data.message)
      } else {
        console.log("response>>", response)
        Cookies.remove("Authtoken")
        Cookies.set("Authtoken", response.data.token, { expires: 5 })
        isAuthenticated();
      }
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
    <Button variant="primary" className="mb-3" onClick={submitHandler}>
        Login 
    </Button>
      </Form>
      <h3>User Id: {user_id}</h3>
    </Container>

  );
}

export default Login;