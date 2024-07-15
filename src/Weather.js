import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  
    function handleApiResponse(response) {
      setTemperature(response.data.main.temp);
    }
 

  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleApiResponse);

  return (
    <div>
      {temperature ? (
        <p>
          The temperature in {props.city} is {temperature}°C
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
