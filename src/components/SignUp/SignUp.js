import React, { useState } from 'react';
import {Button,Form,Container,Row,Col,Modal} from 'react-bootstrap';
import Axios from '../../Axios';
import Cookies from 'js-cookie';
import { TextField } from '@mui/material';



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

    <Modal.Header closeButton>
    </Modal.Header>

    <Modal.Body>
    <Row>
            <Col>1 of 2</Col>
            <Col>
            <br/><br/>
            <h3>SignUp</h3>
            <br/><br/>    
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
              <h7>Already have an account? <span className="register-link" onClick={() => { props.onHide(); props.openLogin();}}>Login Here</span></h7>
            </Col>
          </Row>
     
      </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={props.onHide}>
        Create Account
      </Button>
    </Modal.Footer>
  </Modal>

    </div>

  );
}

export default Signup;