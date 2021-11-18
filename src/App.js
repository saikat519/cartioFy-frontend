import React,{useState} from 'react';
import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
//import { useStateValue } from "./StateProvider"; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  //const [{ user_id }, dispatch] = useStateValue();
  const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  console.log("isLogin",isLogin)
  return (
    <div className="App">
      <Router>
          <Switch>
          
          <Route path="/">
            <Navbar
              setLogin={() =>{ setisLogin(!isLogin) }}
              setSignup={() =>{ setisSignup(!isSignup) }}
            />
            {
              isSignup &&
              <SignUp
                show={isSignup}
                onHide={() => setisSignup(false)}
                openLogin={() => setisLogin(true)}
              />
            }
            {
              isLogin ?
                <LoginScreen
                  show={isLogin}
                  onHide={() => setisLogin(false)}
                  openSignup={() => setisSignup(true)}
                />
                :
                <Home/>
            }
            
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
