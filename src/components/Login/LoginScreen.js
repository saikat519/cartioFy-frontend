import "./Login.css" ;
import {Button} from 'react-bootstrap';

function Login() {
  return (
    <div className="loginApp">
      <label for="email">Email Id: </label>
      <input type="email" id="email" name="email"></input>
      <br/><br/>

      <label for="pwd">Password: </label>
      <input type="password" id="pwd" name="pwd">
      </input>
      <br/><br/>
      <Button variant="outline-primary">Login</Button>{' '}
    </div>

  );
}

export default Login;