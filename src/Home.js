import React from 'react'
//import { Link } from 'react-router-dom'
// import Navbar from "./Navbar"
import './App.css';
import { useUserAuth } from './UserAuthContext';
function Home() {
  const {user,logOut}=useUserAuth();
  const handleLogOut=async()=>{
    try{
     await logOut();
    }catch(err){
      console.log(err.massage);
    }
  }
 
  return (
    <div className='container home'>
      {/* <Navbar/> */}
      <div className="row justify-content-center mt-5 home-text">
      <div className="col-md-12">
      <h1 className='text-center' style={{color:"red"}}>WEL COME YETTI</h1>
{user && user.email} 
<div className='text-center justify-content-center mt-5'>
<button className='btn btn-outline-primary btn-sm' onClick={handleLogOut}>logout</button>
</div>
      
      </div>
      </div>
         </div>
  )
}

export default Home
