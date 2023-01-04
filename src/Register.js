import React,{useState} from 'react'

import './App.css'
import {Link,useNavigate} from "react-router-dom";
 import { useUserAuth } from './UserAuthContext';
//  import { Alert } from 'react-bootstrap';
 function Register() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  
  const navigate =useNavigate();
  const {signUp}=useUserAuth();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    try{
await signUp(email,password);
navigate("/")
    }
    catch(err){
setError(err.massage)

    }
    
  }
  return (
    <>
    <section className='register'>
    <h1 className='text-center' style={{color:"white"}}>REGISTER</h1>
   
    {/* {error && <Alert variant='danger'>{error}</Alert>} */}
     
      
    <div className="container">
    <div className="row justify-content-end">
        <div className="col-md-6">
        <form onClick={handleSubmit}>
  <div className="mb-3">
  {/* <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-facebook-f me-3"></i>Sign Up Face Book</button>
  <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-google me-3"></i>Sign Up google</button> */}
   
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="">
  <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"red"}}>Email</label><br />
    <input type="email" name='name' placeholder='Plese Enter Your Email' onChange={(e)=>setEmail(e.target.value)} 
    className="form-control w-100 mb-4" />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"red"}}>Password</label><br />
   <input type="password" name='name' placeholder='Plesr Enter Your Password' onChange={(e)=>setPassword(e.target.value)}   className="form-control w-100 mb-4" />
  </div>
  
  <div className='text-center d-flex justify-content-center'>
  <button type="submit" className="btn btn-primary w-80 mt-3 btn-sm">Submit</button>
  </div>
  
</form>
<div className='mb-4 text-center mt-3'>
    <h3 className='text-center' style={{color:"red"}}>I Have All Ready An Account! Click On Belowe</h3>
    <div className='text-center d-flex justify-content-center mt-3'>
    <button className='btn btn-outline-primary btn-sm' style={{color:"white"}}>
        <Link to="/" >Login</Link>
    </button>

    
    
    </div>
    
</div>
        </div>
        
    </div>
    

    </div>
   
    </section> 
    </>
  )
}

export default Register
