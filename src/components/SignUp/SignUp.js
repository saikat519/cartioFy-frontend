import React, { useState } from 'react';
import {Button,Row,Col,Modal} from 'react-bootstrap';
import Axios from '../../Axios';
import Cookies from 'js-cookie';
import { TextField } from '@mui/material';
import karolina from '../../images/karolina.jpg'
import './signUp.css'


function Signup(props) {
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
      
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >

    

    <Modal.Body>
    <Row>
            <Col>
              <img src={karolina} height={550} width={400} className="signup-img"  />
            </Col>
            <Col>
              <p className="d-flex flex-row-reverse" onClick={props.onHide}><span style={{ cursor:'pointer' }}>&#10006;</span></p>
              
            <h3 className="signup-header">Sign up</h3>
            <br/>   
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <br/><br/>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <br/><br/>
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br/><br/>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        <br/><br/>
              <h7>Already have an account? <span className="register-link" onClick={() => { props.onHide(); props.openLogin(); }}>Login Here</span></h7>
              <br /><br />
          
          <Button variant="primary" className="ml-5" onClick={props.onHide}>
            Create Account
          </Button>
          
            </Col>
          </Row>

     
      </Modal.Body>
    
  </Modal>

    </div>

  );
}

export default Signup;