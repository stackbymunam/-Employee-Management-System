import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { Authcontext } from './context/Authprovider'
import Emloyee from './components/Dashboard/Emloyee'
import Admin from './components/Dashboard/Admin'
import { setLocalStorage } from './utils/Localstorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserId, setLoggedInUserId] = useState(null)
  const [userData] = useContext(Authcontext)

  // Seed localStorage only once
  useEffect(() => {
    if (!localStorage.getItem('employees')) {
      setLocalStorage()
    }
  }, [])

  // Restore session on page reload
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser.role)
      if (parsedUser.role === 'employee') {
        setLoggedInUserId(parsedUser.data.id)
      }
    }
  }, [])

  // Always derive live employee data from context so task updates reflect instantly
  const loggedInUserData =
    user === 'employee' && Array.isArray(userData)
      ? userData.find((e) => e.id === loggedInUserId) || null
      : null

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (!Array.isArray(userData)) {
      alert('User data still loading')
      return
    }

    const employee = userData.find(
      (e) => email === e.email && password === e.password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserId(employee.id)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <Admin changeUser={setUser} />}
      {user === 'employee' && loggedInUserData && (
        <Emloyee changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  )
}

export default App