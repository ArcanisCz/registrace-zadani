import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { NameFromEmail } from '../handlers/userHandlers';



const Registration = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });

      function saveUser(){
          event.preventDefault();
          if(user.email.indexOf('@') <= -1) throw console.log("email non valid");
          const usernameadd = NameFromEmail(user.email, "@");
          
        if(user.username == '') setUser({...user, username: usernameadd})
    };
    console.log(user);
    

  return (
    <div className="registration-form">
      <h1>Registration</h1>
      <div className="registration-form_content"> 
        <input type="email" placeholder="Email Address" 
        onChange={e => setUser({...user, email: e.target.value})} value={user.email}/>
        <input type="text" placeholder="User Name"
        onChange={e => setUser({...user, username: e.target.value})} value={user.username}/>
        <input type="password" placeholder="Password"
        onChange={e => setUser({...user, password: e.target.value})} value={user.password}/>
        <input type="password" placeholder="Confirm password"
        onChange={e => setUser({...user, passwordConfirm: e.target.value})} value={user.passwordConfirm}/>
        <button className="registration-form_btn" onClick={saveUser}>Register</button>
      </div>
    </div>
  );
};

export default Registration;
