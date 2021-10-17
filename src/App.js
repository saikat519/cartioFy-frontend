import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import Landing from './components/LandingPage/Landing';
import SignUp from './components/SignUp/SignUp';
import React, { useState } from 'react';


function App() {
  const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  return (
    <div className="App">
      <Landing
        setLogin={()=>{
          setisLogin(true)
          setisSignup(false)
        }}

        setSignup={()=>{
          setisSignup(true)
          setisLogin(false)
        }}
      />

      {isLogin?<LoginScreen/>:null}
      {isSignup?<SignUp/>:null}

    </div>
  );
}

export default App;
