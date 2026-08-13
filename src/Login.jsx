import React, { useState } from 'react'

export default function Login({ onLogin }){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // simple mocked auth: username 'user' password 'pass'
    if(username === 'user' && password === 'pass'){
      setError('')
      onLogin({name: 'user'})
    } else {
      setError('Invalid credentials — try user / pass')
    }
  }

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input value={username} onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}
