import { useState } from "react"

function UpdateArray(){

    const [foods, setFoods] = useState(["Apple","Banana","Orange"])

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
            document.getElementById('foodInput').value=""
    }
    return(
        <div>
            <h2>List of Foods</h2>

            <ul>
                {foods.map((food,index)=> <li key={index}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray