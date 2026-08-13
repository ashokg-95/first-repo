import React, { useState } from 'react'
import Login from './Login'
import Blogs from './Blogs'

export default function App(){
  const [user, setUser] = useState(null)
  return (
    <div className="app">
      {user ? <Blogs user={user} onLogout={() => setUser(null)} /> : <Login onLogin={(u)=>setUser(u)} />}
    </div>
  )
}
