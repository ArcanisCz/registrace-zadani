
import React, {useState} from 'react';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
 })
const handleInputChange = (id, value) => {
  if(id === "email"){
    setUser(value);
  }
  if(id === "userName"){
      setUser(value);
  }
  if(id === "password"){
    setUser(value);
  }
  if(id === "confirmPassword"){
    setUser(value);
  }
  console.log(id, value);
}
  /* const handleInputChange = (e) => {
    
      setUser({...user, [e.target.name]:e.target.value})
    }
    console.log(handleInputChange(e))
  */

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
  <div className='box'>
  <h1>REGISTRATION</h1>
  <div className='form-box'>
  <form className='form'>
    <input 
    type= "email" 
    name= "email" 
    id= "email" 
    placeholder="Email Address" 
    value={user.email} 
    onChange= {(e) => handleInputChange("email", e.target.value)}></input>

    <input 
    type= "text" 
    name="userName" 
    id="userName" 
    placeholder="User Name" 
    value={user.username} 
    onChange={(e) => handleInputChange("userName", e.target.value)}></input>

    <input 
    type= "password" 
    name="password" 
    id="password" 
    placeholder="Password" 
    value={user.password} 
    onChange={(e) => handleInputChange("password", e.target.value)}></input>

    <input 
    type= "password" 
    name="confirmPassword" 
    id="confirmPassword"
    placeholder="Confirm Password"
    value={user.passwordConfirm}
    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}></input>

    <button onClick={() => handleSubmit()} type="submit">REGISTER</button>
  </form>
  </div>
  </div>
  )
}