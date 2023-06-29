import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const updateTime = new Date();
      setTime(updateTime);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <>
      <h2>La hora es: {time.toLocaleTimeString()}</h2>
    </>
  );
}

export default App


// About the last code

/* 
  The issue is that setInterval is not cleaned up when the component unmounts, which can lead to memory leaks and unnecessary background processing.
*/