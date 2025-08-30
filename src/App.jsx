import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } 
    // ✅ Guest login option
    else if (email === 'guest@ems.com' && password === 'guest123') {
      setUser('guest')
      setLoggedInUserData({ name: 'Guest User', email: 'guest@ems.com' })
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'guest', data: { name: 'Guest User', email: 'guest@ems.com' } })
      )
    } 
    else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
      } else {
        alert('Invalid Credentials')
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user === 'guest' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
