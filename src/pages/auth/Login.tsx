import React, { useState } from "react"
import Input from "../../components/field/InputField"

import users from "../../data/users.json" // data
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = users.find(user => user.username === username);

    if (user) {
      console.log("Logged in as", username);
      setError('')
      navigate("/", {
        state: {
          name: user.name,
          username: user.username,
          image: user.image
        }
      })
      localStorage.setItem('user', JSON.stringify({
        name: user.name,
        username: user.username,
        image: user.image
      }));

    } else if (username === "defaultadmin" && password === "password") {
        console.log("Logged in as admin");
        setError('');
        navigate("/", {
          state: {
            name: "Default Admin",
            username: username,
          }
        })
        // Inside the successful login handler
        localStorage.setItem('user', JSON.stringify({
          name: "Default Admin",
          username: username,
          image: '/src/assets/img/default-profile.jpg'
        }));

    } else {
      setError('Invalid username or password')
    }
  }
  
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-tl from-light-blue-secondary to-light-blue-primary">
      <img 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        src="/src/assets/img/background_login.png" 
        alt="background" 
      />

      {/* Form */}
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="w-11/12 bg-[#FBFBFB]/90 sm:w-96 h-96 rounded-3xl shadow">
          <img src="/src/assets/img/default-profile.jpg" alt="Avatar" className="w-24 h-24 rounded-full mx-auto mt-10 mb-2" />
          <h1 className="text-center text-lg font-bold">Sign In</h1>
          <form action="/login" method="post" className="mx-12">
            {error ? (
              <p id='error' className='text-center my-4 text-red-primary text-xs font-normal'>Error: {error}</p>
          ) : (
            <div className="h-10"></div>
          )}
            <div className="space-y-3">
              <Input id={"username"} height={10} value={username} type="text" label={"username"} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)}/>
              <Input id={"password"} height={10} value={password} type="password" label={"password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="flex justify-between mt-4">
              <button type="button" className="text-sm text-blue-700" onClick={() => setError("Forgot password is not available")}>Forgot password?</button>
              <button type="submit" className="h-7 w-20 bg-neutral-400 hover:bg-blue-700 rounded-lg font-medium text-white text-sm" onClick={handleSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}
