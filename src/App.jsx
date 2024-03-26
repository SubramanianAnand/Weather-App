import React, { useState } from 'react'
import "./App.css";
import axios from 'axios'

function App() {
 
  const [city, setCity] = useState('');
  const [data, SetData] = useState();

  const key = "38d5ba4fb65f67ce0806f1a24cc9b3c1";
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      SetData(response.data);
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className='app'>
      <h1> Weather App</h1>
      <div className='input-form'>
        <input
        type='text'
        className='input'
        value={city}
        placeholder='Enter the City name'
        onChange={e => setCity(e.target.value)}
        />
        <label className='textUser'></label>
        
      <button className='button' onClick={fetchData}>Fetch</button>
    </div>
    <br/>
    <br/>
    <br/>
    <div>
      {data &&(
        <div className='card'>
          <div>
          <h2>{data.name}, {data.sys.country}</h2>
          
           <p>Temp : {Math.round(data.main.temp)} F</p> 
            
             <p>Lat : {data.coord.lat}</p> 
              <p>Lon : {data.coord.lon}</p> 
              <p>Humidity : {data.main.humidity}</p> 
            </div>
            </div>
        
      )}
    </div>
    </div>
  );
}

export default App;
