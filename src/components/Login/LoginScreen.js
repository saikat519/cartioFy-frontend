import "./Login.css" ;
import {Button,Form,Container,Row,Col,Modal} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import Axios from '../../Axios';
import Cookies from 'js-cookie';
import { useStateValue } from "../../StateProvider"; 

function Login(props) {
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
        
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        
        </Modal.Body>
       
       
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>

  );
}

export default Login;