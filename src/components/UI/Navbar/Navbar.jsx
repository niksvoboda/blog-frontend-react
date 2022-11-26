import {
      Link
     } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const Navbar =() =>{
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const unLogin = event =>{
      setIsAuth(false);
      localStorage.removeItem('auth');
      
    }

    return(
        <div className="navbar">
        <div className="navbar__links">
        <Link to="/">Главная</Link>  
          <Link to="/about">О проекте</Link>
          <Link to="/posts">Посты</Link>
          {isAuth
          ?
          <Link to="/login" onClick={unLogin}>Выход</Link>
          :
          <Link to="/login">Авторизация</Link>
          }
         
        </div>
       </div>
    )
}


export default Navbar;