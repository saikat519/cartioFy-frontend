import React,{useState,useEffect} from 'react';
import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import { useStateValue } from "./StateProvider"; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import Axios from './Axios';
import {auth} from './firebase'


function App() {
  const [{ user }, dispatch] = useStateValue();
  const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const [userExist,setUserExist] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        setUserExist(authUser);
        console.log("authhuser>>>", userExist);
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type:"EMPTY_CART"
        })
      }
    });
    console.log('useEffect>>user>>',user)
  },[dispatch]);
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
              isLogin &&
                <LoginScreen
                  show={isLogin}
                  onHide={() => setisLogin(false)}
                  openSignup={() => setisSignup(true)}
                />               
            }
            <Home/>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
