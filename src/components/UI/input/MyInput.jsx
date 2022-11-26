import React from "react";
import Classes from './MyInput.module.css';

const MyInput = ({...props}) => {

    return(
        <input className={Classes.myImp} {...props}/>
    );
}

export default MyInput;