import React from 'react'

export default function Login() {
  return (
    <>
      <div>Login Page</div>
      <img src="" alt="Avatar" />
      <h1>Sign In</h1>
      <p id='error'>Display Error</p>
      <input type="text" name="username" id="username" placeholder='Username' />
      <input type="password" name="password" id="password" placeholder='password' />
      <br />
      <button type="button">Forgot password?</button>
      <button type="submit">Login</button>
    </>
  )
}
