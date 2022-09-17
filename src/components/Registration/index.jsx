import React, {useState, useEffect} from 'react';
import './style.css';

const Registation = () => {

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      });

    // const [email, setEmail] = useState(null);
    // const [username, setUsername] = useState(null);
    // const [password,setPassword] = useState(null);
    // const [confirmPassword,setConfirmPassword] = useState(null);

    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "email"){
    //         setEmail(value);
    //     }
    //     if(id === "name"){
    //         setUsername(value);
    //     }
    //     if(id === "password"){
    //         setPassword(value);
    //     }
    //     if(id === "confirmPassword"){
    //         setConfirmPassword(value);
    //     }

    // }

    useEffect(() => {
        if (user.email.indexOf("@") >= 0 && user.username.length === 0) {
          setUser({ ...user, username: user.email.substring(0, user.email.indexOf("@")) });
        }
      }, [user.email]);
    

    const handleSubmit = () => {
        console.log(user);
        // console.log({email,username,password,confirmPassword});
    }


     return (
        <>
        <div className="header">
            <h1 className="header-headline">REGISTRATION</h1>
        </div>

        <div className="form">
            <form className="form-content">
                <div className="email">
                    <label className="form__label" htmlFor="email" hidden>Email Address </label>
                    <input
                        className="form__input"
                        type="email" id="email"
                        name="email"
                        alue={user.email} 
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
            </form>
        </div>

        <div className="footer">
            <button className="button" type="submit" onClick={handleSubmit}>REGISTER</button>
        </div>
        </>
     )
          
};


export default Registation;