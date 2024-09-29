// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = ({ switchToLogin }) => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSignIn = () => {
    // Perform sign-in logic here (e.g., authentication, form validation)

    // Navigate to the main chat page upon successful sign-in
    navigate('/chat');
  };
  return (
    <div className="auth-form-signup">
     <div className='texttt'>
                <h1 className='signIn'>Sign Up</h1>
                <p className='community'>Join the Community</p>
                </div>
      <div className='form'>

      <form >
            <input 
                className='inpstyle'  
                name="username" 
                type="text" 
                placeholder="Enter your name" 
                id ="username">
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                
            </input>
            <br />
            <input 
                className='inpstyle' 
                name="password" 
                type="password"   
                id="password" 
                placeholder="Enter your email"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}>

            </input>
            <br />
            <input 
                className='inpstyle' 
                name="password" 
                type="password"  
                id="password" 
                placeholder="Create your password"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}>

            </input>
            <br />
            <input className='inpstyle' name="password" type="password"  id="password" placeholder="Confirm password"></input>
            <br />
        <button className='btn' type="submit" onClick={handleSignIn}>Create new Account</button>
      </form>
      <div className='signup' onClick={switchToLogin}>Already have an account?</div>
      
      </div>
      
    </div>
  );
};

export default Signup;
