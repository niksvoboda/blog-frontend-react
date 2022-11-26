import {
    Routes,
    Route
  } from "react-router-dom";

 import {publicRoutes, privateRoutes}  from "./router/index.js";
 import { AuthContext } from "../context/index.js";
import { useContext } from "react";

const AppRouter =() =>{
   const {isAuth} = useContext(AuthContext);
  
   return(
      isAuth
      ? 
    <Routes>
    
    {privateRoutes.map(route =>
     <Route path={route.path} element={route.element} key={route.path}/>
    )}:

    </Routes>
    :
    <Routes>
    

     {publicRoutes.map(route =>
     <Route path={route.path} element={route.element} key={route.path}/>
    )}
   
    </Routes>
   )
}

export default AppRouter;