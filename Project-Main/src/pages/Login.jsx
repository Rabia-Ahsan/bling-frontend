// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ switchToSignup }) => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignIn = () => {
    // Perform sign-in logic here (e.g., authentication, form validation)

    // Navigate to the main chat page upon successful sign-in
    navigate('/chat');
  };
  return (
    <div className="auth-form">
     <div className='texttt'>
                <h1 className='signIn'>Sign In</h1>
                <p className='community'>Join the Community</p>
                </div>
      <div className='form'>

      <form >
            <input className='inpstyle'  
                name="username"   
                type="text" 
                placeholder="   Enter your username" 
                id ="username" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}>

            </input>
            <br />
            <input 
                className='inpstyle'  
                name="password" 
                type="password"  
                id="password" 
                placeholder="   Enter your password" 
                value={password} 
                onChange={(e) =>setPassword(e.target.value)}>

            </input>
            <br /><br/>
        <button className='btn' type="submit" onClick={handleSignIn}>Login</button>
      </form>
      <div className='signup' onClick={switchToSignup}>Create new account</div>
      
      </div>
      
    </div>
  );
};

export default Login;
