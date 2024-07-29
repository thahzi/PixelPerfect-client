// import { useState } from 'react';
// import React  from 'react'
// import axios from 'axios';
// import TextField from '@mui/material/TextField';



// function Register() {

//   const [name , setName] = useState()
//   const [email , setEmail] = useState()
//   const [Password , setPassword] = useState()

//   const handleSumbit = (e)=>{
//     e.preventDefault()
//     axios.post('',{name, email, Password})
//     .then(result => console.log(result))
//     .catch(err=> console.log(err))
//   }

//   return (
//     <>

//       <form action="" className='d-flex w-75 ms-5 flex-column justify-content-center   gap-3'>
//           <TextField id="standard-basic" label="Name" variant="standard" />
//           <TextField  id="standard-basic" label="Email Address" variant="standard" />
//           <TextField  id="standard-basic" label="Password" variant="standard" />
//           <button >sign up</button>
//       </form>


//     </>
//   )
// }

// export default Register