import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }


  return (
  <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 border-emerald-600 p-20'>
      <form 
      onSubmit={(e)=>{
          submitHandler(e)
      }}
      className='flex flex-col items-center justify-center'>
        <input 
        value={email}
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        required 
        className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'  type="email" placeholder='Enter your email'/>
        <input
        value={password}
        onChange={(e)=>{
          setpassword(e.target.value)
        }}
        required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 mt-3 rounded-full placeholder:text-gray-400'  type="password" placeholder='Enter password' />

        <button className='mt-7 text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5  rounded-full placeholder:text-white' >Log in</button>
       </form>
    </div>
  </div>
  )
}

export default Login

