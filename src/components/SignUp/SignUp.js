import React, { useState } from 'react';
import {Button,Form,Container,Row,Col,Modal} from 'react-bootstrap';
import Axios from '../../Axios';
import Cookies from 'js-cookie';


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
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={props.onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

    </div>

  );
}

export default Signup;