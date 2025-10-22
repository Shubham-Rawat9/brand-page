import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const handleCity = (e)=> {
    setCity(e.target.value)
    console.log(city)
  }

  const handleClick =() =>{
    
  }
  return (
    <>
    <h2>Weather components</h2>
      <input
        type="text"
        placeholder="Enter Your City Name"
        value={city}
        onChange={handleCity} />

        <button onClick={handleClick}>Get Weather</button>
    </>
  );
};

export default Weather;
