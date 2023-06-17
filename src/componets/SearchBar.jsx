import React from "react";
import Button from "./Button";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const SearchBar= (prop)=>{
    return <div className="filter">
    <div className="displayFiltered">
    {
        (prop.selectedSkills).map((item,index)=>{
       return   (prop.selectedSkills.length <6)?
        <p key={index}>{item}<Button classname='delete' click={prop.deleteAction} text=<ClearRoundedIcon  sx={{fontSize:"17px", color: "#fff", fontWeight:""}} />/></p>
            :null;
        })
    }
    </div>
    <div className="clearDiv">
    <Button classname='clear' click={prop.clearAction} text='Clear' />
    </div>

    </div>
}
export default SearchBar;