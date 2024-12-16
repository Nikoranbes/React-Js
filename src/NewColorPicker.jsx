import React, { useState } from "react"
import "./ColorPicker.css"

function NewColorPicker(){

  
    const [color,setColor]= useState('#ffffff')

    function handleColorChange(e){
        setColor(e.target.value)
    }
    
return(
    <div className="background" style={{backgroundColor:color}}>
        <div className="container" >
                <input  type="color" value={color} onChange={handleColorChange}/>
        </div>
    </div>
)
}
export default NewColorPicker