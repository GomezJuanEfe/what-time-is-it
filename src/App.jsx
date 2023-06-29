import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState((new Date).toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  const clock = () => {
    const updateTime = new Date;
    const timeFormated = updateTime.toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    setTime(timeFormated);
  };

  setInterval(clock, 5000);

  return (
    <>
      <h2>La hora es: {time}</h2>
    </>
  )
}

export default App
