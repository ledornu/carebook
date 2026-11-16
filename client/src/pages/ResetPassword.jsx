import React from 'react'

function ResetPassword() {
  return (
    <form action="" className="form card">
      <h1>choose a new password</h1>
      <label className="field">
        Enter new password
        <input type="password" required value={""} minLength={"8"}/>
        <button className='btn'>Update password</button>
      </label>
    </form>
  )
}

export default ResetPassword