import React,{useState} from "react"


function MyCar(){

    const [car,setCar] = useState({year:2025,make:"Ford",model:"Mustang"})

   function handleCarYear(e){
        setCar(c => ({...c, year:e.target.value}))
    }
    function handleCarMake(e){
        setCar(c => ({...c, make:e.target.value }))
    }
    function handleCarModel(e){
        setCar(c => ({...c, model:e.target.value}))
    }

    return (
        <>
            <h2>Your Favorite Car {car.year} {car.make} {car.model}</h2>
            <input type="number" value={car.year} onChange={handleCarYear} />
            <input type="text" value={car.make} onChange={handleCarMake} />
            <input type="text" value={car.model} onChange={handleCarModel} />
        </>
    )
}

export default MyCar