import React, { useState } from 'react'

const Login = ({ handleLogin, handleGuestLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-2xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 mt-3 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />

          <button className="mt-7 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full">
            Log in
          </button>

          {/* Guest Login Button */}
          <button
            type="button"
            onClick={handleGuestLogin}
            className="mt-5 text-emerald-600 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full"
          >
            Continue as Guest
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
            Recruiters can click <b>“Continue as Guest”</b> to view the project
            without logging in.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
