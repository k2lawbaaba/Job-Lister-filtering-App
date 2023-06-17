import React from "react";
import Button from "./Button";
import Avater from "./Avater";
import Details from "./Details";
import '../styles.css'

const Card =(prop)=>{

    return<div className="card">    
    <div className="avater_Info">
    
    <div className="avater">
        <Avater src={prop.logo} />
    </div>

    <div className="info">
     <Details  
        skill={prop.company}
        New={prop.new}
        Features={prop.featured}
        title_text={prop.position}
        period={prop.postedAt}
        type={prop.contract}
        mode={prop.location}
        newID={prop.newID}
        featID={prop.featID}
     />
    </div>
    </div>

    <div className="skillButtons">
      {
       (prop.skills).map((skill, index) => (
        <Button
        key={index}
        click={()=>prop.click(skill)}
        text={skill}   
    />  
      ))}
       

    </div>
    </div>
}
export default Card;