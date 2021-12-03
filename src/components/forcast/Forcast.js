import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Forcast() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
        const apiKey = process.env.REACT_APP_MARS_API_KEY;
        const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`);
        const data = await res.json();
        
        setWeatherData(data);
    }
  }, []);

  if (!weatherData) return <div />;

  return (
    <div className="home">
      <Link className="home-link" to="/" >HOME</Link>
    </div>
  );
}