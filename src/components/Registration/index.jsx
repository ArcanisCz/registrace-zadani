import React, {useState, useEffect} from 'react';
import './style.css';
import userIcon from './img/user-solid.svg'

const Registation = () => {

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      });

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(user);
    };

    useEffect(() => {
        if (user.email.indexOf("@") >= 0 && user.username.length === 0) {
          setUser({ ...user, username: user.email.substring(0, user.email.indexOf("@")) });
        }
      }, [user.email]);

     return (
        <>
        <div className="header">
            <h1>Registration</h1>
            <div className="userIcon">
                <img src={userIcon} alt="user icon"/>
            </div>
        </div>

        <div className="body">
            <form className="form" onSubmit={handleSubmit}>
                <div className="email">
                    <label className="form__label" htmlFor="email" hidden>Email Address </label>
                    <input
                        className="form__input"
                        type="email"
                        id="email"
                        name="email"
                        value={user.email} 
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Email Address"/>
                </div>
                <div className="username">
                    <label className="form__label" htmlFor="username" hidden>User Name </label>
                    <input 
                        className="form__input"
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="User Name"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password" hidden>Password </label>
                    <input 
                        className="form__input"
                        type="password" 
                        id="password" 
                        name="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword" hidden>Confirm Password </label>
                    <input 
                        className="form__input" 
                        type="password" 
                        id="confirmPassword" 
                        value={user.passwordConfirm}
                        onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
                        placeholder="Confirm Password"/>
                </div>
               
                <div className="button">
                    <button className="form__button" type="submit">Register</button>
                </div>
            </form>
        </div>
        </>
     )
          
};


export default Registation;