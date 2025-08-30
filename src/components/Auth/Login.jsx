import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setemail("")
    setpassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-2xl shadow-lg'>
        <form 
          onSubmit={(e) => submitHandler(e)}
          className='flex flex-col items-center justify-center'
        >
          <input 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 w-72'  
            type="email" 
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 mt-3 rounded-full placeholder:text-gray-400 w-72'  
            type="password" 
            placeholder='Enter password' 
          />

          <button className='mt-7 text-white bg-emerald-600 text-xl py-3 px-5 rounded-full w-72 hover:bg-emerald-700 transition'>
            Log in
          </button>

          {/* Guest Login Button */}
          <button
            type="button"
            onClick={() => handleLogin("guest@example.com", "guest")}
            className='mt-4 text-white bg-green-600 text-lg py-3 px-5 rounded-full w-72 hover:bg-green-700 transition'
          >
            Login as Guest
          </button>
        </form>

        {/* Recruiter Note */}
        <p className="text-gray-600 text-sm mt-6 text-center">
          👋 Recruiters: Please use <span className="font-semibold">“Login as Guest”</span> 
          to explore the Employee Dashboard.
        </p>
      </div>
    </div>
  )
}

export default Login
