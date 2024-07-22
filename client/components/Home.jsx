import React, { useEffect, useRef , useState} from 'react';
import Typed from 'typed.js';
import axios from 'axios';

const Home = () => {
  const typedRef = useRef(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [temperature, setTemperature] = useState(null);
  
  useEffect(() => {
    const options = {
      strings: ["branding", "user experience", "interactive experiences"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Ghaziabad,in&units=metric&appid=05d3dd84f278207c9a983ac8fb661877`);
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };
    fetchWeather();
  }, []);
  
  return (
    <>
      <div className="home">
        <div className="hr">
          <div className="section1">
            <p className="text-gradient0">Oh, Hello there!</p>
            <div className="location">
              <div className="blink-dot"></div>
              <p className="text-gradient0 Country">India</p>
              <p className="text-gradient0 time">{time}</p>
              <p className="text-gradient0 temp">
                {temperature !== null ? `${temperature}°C` : 'Loading...'}
              </p>
            </div>
          </div>
          <p className='text-gradient1'>I'm Sarthak Sharma, a mern stack developer specialized in creating crisp and catchy</p>
          <p className='text-gradient2' ref={typedRef}></p>
        </div>
      </div>
    </>
  );
}

export default Home;
