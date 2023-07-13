import React from "react";
import Button from "./Button";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const SearchBar= (prop)=>{
    return <div className="filter">
    <div className="displayFiltered">
    {
        (prop.selectedSkills.length < 6 ) && 
        (prop.selectedSkills).map((item,index) => {
       return <p key={index}>{item}<Button classname='delete' click={()=> prop.deleteAction(item)} 
         text=<ClearRoundedIcon  sx={{fontSize:"17px", color: "#fff", fontWeight:""}} />/></p>;
        })
    }
    </div>
    <div className="clearDiv">
    <Button classname='clear' click={prop.clearAction} text='Clear' />
    </div>

    </div>
}
export default SearchBar;