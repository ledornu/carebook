import React from 'react'

function ForgotPassword() {
  return (
    <form action="" className="form card">
      <h1>Reset your passward</h1>
      <label className="field">
        Enter Your 
        <input type="email" required value={""}/>
        <button className='btn'>Send reset link</button>
      </label>
    </form>
  )
}

export default ForgotPassword