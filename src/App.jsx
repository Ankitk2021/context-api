import React from 'react'
import UserContextProvider from './Contexts/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
    <div>Hello World</div>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App