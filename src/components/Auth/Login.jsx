import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form 
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'  
            type="email" 
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 mt-3 rounded-full placeholder:text-gray-400'  
            type="password" 
            placeholder='Enter password' 
          />

          <button 
            type="submit"
            className='mt-7 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full'
          >
            Log in
          </button>

          {/* Guest Login Button */}
          <button
            type="button"
            onClick={() => handleLogin("guest@ems.com", "guest123")}
            className='mt-4 text-emerald-600 border-2 border-emerald-600 text-lg py-2 px-4 rounded-full hover:bg-emerald-600 hover:text-white transition'
          >
            Guest Login
          </button>
        </form>

        {/* Recruiter Note */}
        <p className='mt-5 text-sm text-gray-500 text-center'>
          👉 Recruiters can use <b>Guest Login</b> to access the system.
        </p>
      </div>
    </div>
  )
}

export default Login
