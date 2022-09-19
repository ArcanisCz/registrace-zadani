import React,{useState} from 'react'
import userIco from './../Registration/user_icon.png';

const Registration = () => {

  const [user,setUser] = useState(
    {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
 )

 const handleSubmit = (e) => {
  e.preventDefault() 
  if (user.password === user.passwordConfirm && user.username !== '' && user.email !== '' && user.password !== '' && user.passwordConfirm !== '') {
    console.log(user)
  } else if (user.password !== user.passwordConfirm) {
    alert('Hesla se neshodují')
  } else {
    alert('Nemáte vyplněná všechna povinná pole')
  }
 }

 const handleChangeEmail = (e) => {
  if (user.username === '' && e.target.value.includes('@')) {
    const nameToUsername = e.target.value.split('@') 
    setUser({...user, username: nameToUsername[0], email: e.target.value})
  } else {
    setUser({...user, email: e.target.value})
  }
 }

 const handleChangeUsername = (e) => {
  setUser({...user, username: e.target.value})
 }

 const handleChangePassword = (e) => {
  setUser({...user, password: e.target.value})
 }

 const handleChangePasswordConfirm = (e) => {
  setUser({...user, passwordConfirm: e.target.value})
 }

  return (
    <>
      <h1>Registration</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__img">
          <img className='form__user-ico' src={userIco} alt="" />
        </div>  
        <input type="email" name='email' id='email' placeholder='Email Address' value={user.email} onChange={handleChangeEmail} required></input>
        <input type="text" name='username' id='username' placeholder='User Name' minLength={2} maxLength={20} value={user.username} onChange={handleChangeUsername} required></input>
         <input type="password" name='password' id='password' placeholder='Password' value={user.password} onChange={handleChangePassword} required></input>
        <input type="password" name='confirm-password' id='confirm-password' placeholder='Confirm Password' value={user.passwordConfirm} onChange={handleChangePasswordConfirm} required></input>
        <button className='form__button'>Register</button>
      </form>
    </>
  )
}

export default Registration