
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Cantact from './Cantact';
 import Home from './Home';
 import Login from './Login';
 import Navbar from './Navbar';
import Product from './Product';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContextProvider } from './UserAuthContext'; 
function App() {
  return (
   
    <BrowserRouter >
    <UserAuthContextProvider>
     <Navbar/>
    <Routes>
         
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Cantact/>}/>
          <Route path="/" element={<Login/>}/>
         
           <Route path="/register" element={<Register/>}/> 
         
    </Routes>
    </UserAuthContextProvider>
    </BrowserRouter>
  
   
  );
}

export default App;
