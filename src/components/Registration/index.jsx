import React, {useState} from 'react';
import './style.css';

const Registation = () => {

    // const [user, setUser] = useState({
    //     email: "",
    //     username: "",
    //     password: "",
    //     passwordConfirm: "",
    //   });

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "name"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log({email,username,password,confirmPassword});
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
                    <input className="form__input" type="email" id="email" name="email" onChange = {handleInputChange} placeholder="Email Address"/>
                </div>
                <div className="username">
                    <label className="form__label" htmlFor="name" hidden>User Name </label>
                    <input className="form__input" type="text" id="name" name="name" onChange = {handleInputChange} placeholder="User Name"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password" hidden>Password </label>
                    <input className="form__input" type="password" id="password" name="password" onChange = {handleInputChange}  placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword" hidden>Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" name="confirmPassword" onChange = {handleInputChange} placeholder="Confirm Password"/>
                </div>
            </form>
        </div>

        <div className="footer">
            <button className="btn" type="submit" onClick={handleSubmit}>REGISTER</button>
        </div>
        </>
     )
          
};


export default Registation;