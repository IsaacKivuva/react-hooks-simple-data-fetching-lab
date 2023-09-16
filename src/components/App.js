import React, { useState, useEffect } from "react";

function App(){

const [dogImage, setDogImage]= useState({})
const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setTimeout(()=> {
                setDogImage(data.message);
                setIsLoading(false)
            }) ,5000)
    },[])

return(
    <div>
        {isLoading ? (
            <div>Loading...</div>
        ): <img src={dogImage} alt="A Random Dog"/>}
    </div>

)}

export default App
