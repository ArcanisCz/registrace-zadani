import React, { useState } from 'react';
import '../components/Registration.css';

const Registration = () => {

    const [user, setUser] = useState ({
        username: "",
        email: "",  
        password: "",
        passwordConfirm: "",
     })

     const handleEmail = (typedEmail) => {
        if (typedEmail.includes("@")) {
        setUser({...user, email: typedEmail});
        }
     }

     const handleUserName = () => {
        if (user.email !== null) {
        const email = user.email;
        setUser({...user, username: email.slice(0, email.indexOf("@"))})}
        else alert("Use valid email address, please.")
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password === user.passwordConfirm)
        {console.log({user})
        alert("Thanks for your registration.")}
        else alert("Passwords do not match.")
     }

     return (
        <div className='container'>
        <h1>REGISTRATION</h1>
        
            

        <form className='registration-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='outer-circle'>
            <div className='inner-circle'></div>
            </div>
            <input type="email" placeholder="Email Address" autoFocus id="email" onChange={(e) => handleEmail(e.target.value)} />
            <input type="text" placeholder="User Name" id="user" onClick={() => handleUserName()} defaultValue={user.username}/>
            <input type="password" placeholder="Password" id="pass" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <input type="password" placeholder="Password Confirm" id="passconf" onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}/>
            <button type="submit">REGISTER</button>
        </form>
        
        </div>
     )

};

export default Registration;