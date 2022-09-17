import React, {useState} from 'react';
import './style.css';

const Registation = () => {

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      });


    const handleClick = () => {
        console.log(user);
    }


     return (
        <>
        <div className="header">
            <h1 className="formHeadline">REGISTRATION</h1>
        </div>

        <div className="form">
            <form className="form-content">
                <div className="email">
                    <label className="form__label" htmlFor="email" hidden>Email Address </label>
                    <input className="form__input" type="email" id="email" name="email" placeholder="Email Address"/>
                </div>
                <div className="username">
                    <label className="form__label" htmlFor="name" hidden>User Name </label>
                    <input className="form__input" type="text" id="name" name="name" placeholder="User Name"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password" hidden>Password </label>
                    <input className="form__input" type="password" id="password" name="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword" hidden>Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </form>
        </div>

        <div className="footer">
            <button className="btn" type="submit" onClick={handleClick}>REGISTER</button>
        </div>
        </>
     )
          
};


export default Registation;