
import React, {useState} from 'react';

export const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
 })

const handleInputChange = (id, value) => {
 let name = "";
  if(id === "email"){
      setUser({...user, email: value});
      if(value.includes("@") === true){
      let indexOfAt = value.search("@") // vrací index na kterém je @
      name = value.slice(0, indexOfAt)
      console.log(value)
      console.log(name)
    } 
      else { 
      alert("Chybný formát emailu.")
      }
  }
  if(id === "userName"){
      setUser({...user, username: name}); // tady jsem to nevymyslela... :-(.. 
      console.log(value)
      console.log({...user, username: name})
  }
  if(id === "password"){
    setUser({...user, password: value});
  }
  if(id === "confirmPassword"){
    setUser({...user, passwordConfirm: value});
}}

 const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
  <div className='box'>
  <h1>REGISTRATION</h1>
  <div className='form-box'>
  <form className='form' onSubmit={handleSubmit}>
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

    <button type="submit"
   >REGISTER</button>
  </form>
  </div>
  </div>
  )
}