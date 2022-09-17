import React from 'react';
import './style.css';

const Registation = () => {

    const handleClick = () => {
        console.log('registred');
    }


     return (
        <>
        <div className="formHeader">
            <h1 className="formHeadline">REGISTRATION</h1>
        </div>
        <form className="formContent">
            <input type="text" id="email" name="EmailAddress" placeholder="Email Address"/>
            <input type="text" id="name" name="UserName" placeholder="User Name"/>
            <input type="text" id="password" name="Password" placeholder="Password"/>
            <input type="text" id="confirmPassword" name="ConfirmPassword" placeholder="Confirm Password"/>
        </form>

        <div className="formButton">
            <button onClick={handleClick}>REGISTER</button>
        </div>
        </>
     )
          
};


export default Registation;