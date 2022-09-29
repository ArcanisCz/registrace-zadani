import React, { useState } from 'react';
import '../components/Registration.css';

const Registration = () => {

    const [user, setUser] = useState ({
        username: "",
        email: "",  
        password: "",
        passwordConfirm: "",
     })

     const handleEmail = (event) => {
        setUser({...user, email: event.target.value});
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === "" || !user.email.includes("@")) {
         alert("Use valid email address, please.");
            return};

        if (user.username === "") {
            const email = user.email;
            setUser({...user, username: email.slice(0, email.indexOf("@"))})};

        if (user.password !== user.passwordConfirm) {
         alert("Passwords do not match.");
            return;}

        alert("Thanks for your registration.");
            return console.log({user});
     }

     return (
        <div className='container'>
        <h1>REGISTRATION</h1>
        
            

        <form className='registration-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='outer-circle'>
            <div className='inner-circle'></div>
            </div>
            <input type="email" placeholder="Email Address" autoFocus id="email" onChange={handleEmail} value={user.email}/>
            <input type="text" placeholder="User Name" id="user" onChange={(e) => setUser({...user, username: e.target.value})} value={user.username}/>
            <input type="password" placeholder="Password" id="pass" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password}/>
            <input type="password" placeholder="Password Confirm" id="passconf" onChange={(e) => setUser({...user, passwordConfirm: e.target.value})} value={user.passwordConfirm}/>
            <button type="submit">REGISTER</button>
        </form>
        
        </div>
     )

};

export default Registration;