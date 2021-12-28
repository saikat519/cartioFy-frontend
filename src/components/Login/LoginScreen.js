import "./Login.css" ;
import {Button,Row,Col,Modal} from 'react-bootstrap';
import React, { useState } from 'react';
//import Axios from '../../Axios';
//import Cookies from 'js-cookie';
import { useStateValue } from "../../StateProvider"; 
import { TextField } from '@mui/material';
import loginPage from '../../images/login-page.jpg'
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [pass, setPass] = useState('');
  const [forgotPass, setForgotPass] = useState(false);
  const [{}, dispatch] = useStateValue();

  // var isAuthenticated = async () => {
  //   //console.log("api called")
  //   let authtoken = Cookies.get('Authtoken')
  //   //console.log("authtoken>>>>>", authtoken)
  //   await Axios.get('/api/login', {
  //     params: {
  //       token: authtoken
  //     }
  //   })
  //     .then(res => {
  //       //console.log(">res>",res)
  //       dispatch({
  //         type: "SET_USER",
  //         user_id: res.data.user_id,
  //       });
  //       props.onHide();
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  
  // useEffect(() => {
  //   isAuthenticated();
  // },[]);

  const forgotPassword = (Email) => {
    auth.sendPasswordResetEmail(Email)
        .then(function () {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        }) 
    
    }

  const submitHandler = async () => {
    auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
        console.log('login successful>>', auth)
        dispatch({
          type: "SET_USER",
          user: auth.user,
        });
        props.onHide();
        history.push('/')
    })
    .catch(err =>{
        // setErrmsg(error.message);
        // setShow(true);
      alert(err.message)
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
            <img src={loginPage} height={550} width={400} className="signup-img" alt="login-img" />
            </Col>
            <Col>
            <p className="d-flex flex-row-reverse" onClick={props.onHide}><span style={{ cursor:'pointer' }}>&#10006;</span></p>
              <br />
              <br />
              <h3>{!forgotPass?"LOGIN":"Forget Password"}</h3>
              <br />
              {forgotPass ?
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
                :
                <>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            
            <br /><br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
                  />
                  </>
              }
              { !forgotPass ?
              <>  
              <br/><br/>
              <Button variant="primary" onClick={() => { submitHandler();}}>
            Login
          </Button>
        <br/><br/>
        <p className="register-link" onClick={()=>setForgotPass(true)}>Forgot Password ?</p>
        <p>New to Cartiofy? <span className="register-link" onClick={() => { props.onHide(); props.openSignup();}}>Register here</span></p>
                </> :
                <> <br /><br />
              <Button variant="primary" onClick={() => { forgotPassword(forgotEmail);}}>
                Submit
              </Button>
                </>
        }    
        </Col>
          </Row>
          
        
        </Modal.Body>

      </Modal>

    </div>

  );
}

export default Login;
