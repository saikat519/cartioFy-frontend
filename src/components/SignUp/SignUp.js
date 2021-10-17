import {Container,Button} from 'react-bootstrap';
import React, { useState } from 'react';


function Signup() {
    const [email, setEmail] = useState(null);
    const [pass1, setPass1] = useState(null);
    const [pass2, setPass2] = useState(null);

  return (
      
    <Container className="m-2 loginApp">
        

<label for="email">Email Id: </label>
      <input type="email" id="email" name="email" onChange={(e)=>{
          setEmail(e.target.value)
      }}></input>
      <br/><br/>


      <label for="pwd">Password: </label>
      <input type="password" id="pwd1" name="pwd" onChange={(e)=>{
          setPass1(e.target.value)
      }}>
      </input>
      <br/><br/>

      <label for="pwd">Confirm Password: </label>
      <input type="password" id="pwd2" name="pwd" onChange={(e)=>{
          setPass2(e.target.value)
      }}>
      </input>
      <br/><br/>
      <Button variant="outline-primary">SignUp</Button>{' '}



    </Container>

  );
}

export default Signup;