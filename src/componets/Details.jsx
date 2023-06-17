import React from "react";
import Button from "./Button";
import "../styles.css"

const Details = (prop)=>{
    return<div>
        <div className="headlines">
            <p id='skill'>  {prop.skill}</p>
            <p id={prop.newID}>  {prop.New}</p>
            <p id={prop.featID}>  {prop.Features}</p>
        </div>
        <div className="title">
            <h3 id="btn" >{prop.title_text}</h3>
        </div>
        <div className="micro_info">
            <p className='mini_info'>{prop.period}</p>
            <p className='mini_info'>{prop.type}</p>
            <p className='mini_info'>{prop.mode}</p>
        </div>
    </div>
}
export default Details;