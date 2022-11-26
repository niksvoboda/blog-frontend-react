import React, { useEffect } from "react";
import './styles/app.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import { AuthContext } from "./context";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  },[])
  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
        }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
         </BrowserRouter>
      </AuthContext.Provider>
    </div>
  ); 
}

export default App;
