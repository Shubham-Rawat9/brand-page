// import React, { useState } from "react";
// import axios from "axios";


// const Weather = () => {
//   const [city, setCity] = useState();
//   const handleCity = (e)=> {
//     setCity(e.target.value)
//     console.log(city)
//   }

//     const fetchWeather = async () => {
//       try{
//           const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`)
//       } catch{

//       }
//     }

//   const handleClick =() =>{
    
//   }
//   return (
//     <>
//     <h2>Weather components</h2>
//       <input
//         type="text"
//         placeholder="Enter Your City Name"
//         value={city}
//         onChange={handleCity} />

//         <button onClick={handleClick}>Get Weather</button>
//     </>
//   );
// };

// export default Weather;
