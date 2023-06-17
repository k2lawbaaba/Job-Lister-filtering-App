import React from "react";
import "../index"

const Button =(prop)=>{
    return<>
        <button className={prop.classname} onClick={prop.click} id={prop.id}>{prop.text} </button>
    </>
}
export default Button;