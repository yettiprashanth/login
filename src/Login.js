import React,{useState} from 'react'

 import {Link, useNavigate} from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useUserAuth } from './UserAuthContext';
import { Alert } from 'react-bootstrap';
function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  
  const navigate =useNavigate();
  const {logIn}=useUserAuth();
  const submitHandler = async (e) =>{
    e.preventDefault();
    setError("")
    try{
await logIn(email,password);
navigate("/home")
setEmail("")
setPassword("")
    }
    catch(err){
setError(err.massage)

    }
    
    
  }
 
  
  return (
    <>
     <section className='login-box'>
    <h1 className="text-center" style={{color:"white"}}>Login</h1>
    
    {error && <Alert variant='danger'>{error}</Alert>} 
    
    <div className="container">
    <div className="row justify-content-end">
    <div className="col-md-6">
    <form className="login1" onSubmit={submitHandler}>
  <div className="mb-3">
  {/* <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-facebook-f me-3"></i>Sign With Face Book</button>
  <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-google me-3"></i>Sign with google</button> */}
   
   {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3 form-check">
    
    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}}>Email</label><br />
    <input type="email" name='name' placeholder='Plese Enter Your Email' onChange={(e)=>setEmail(e.target.value)}
    className="form-control w-100 mb-4" />
  </div>
  
  <div className="mb-3 form-check">
  <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}}>Password</label><br />
   <input type="password" name='name' placeholder='Plesr Enter Your Password'
    onChange={(e)=>setPassword(e.target.value)}   className="form-control w-100 mb-4" />
    </div>
    <div className='text-center justify-content-center mt-3'>
    <button type="submit" className="btn btn-primary w-50 ms-5 btn-sm">Submit</button>
    </div>
 
</form>
<div className='p-4 text-center mt-3'>
  <h3 className='' style={{color:"red"}}>Don't Have A Account ? Registre Click On Belowe</h3>
 
  <button className='btn btn-outline-primary mt-3 btn-sm'><Link to="/Register" style={{color:"white"}}>Register</Link></button>
  
  
</div>
    </div>
    </div>
    </div>
    
    </section>  
    </>
  )
}

export default Login;
