import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  Home, ActivationPage, SignUpPage} from "./Routess.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>} />
      <Route path="/activation/:activation_token" element={<ActivationPage />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App