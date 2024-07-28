import React from 'react'
import TextField from '@mui/material/TextField';
function Register() {
  return (
    <>

      <form action="" className='d-flex w-75 ms-5 flex-column justify-content-center   gap-3'>
          <TextField id="standard-basic" label="Email Address" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <button>login</button>
      </form>


    </>
  )
}

export default Register