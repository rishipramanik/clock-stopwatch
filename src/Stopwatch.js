import React, {useEffect, useState} from 'react'
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;
        if (running) {
            interval=setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            },10);         
        } else if (!running) {
                clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running])

  return (
    <div className="stopwatch">
        <button onClick={() => setTime(0)}>Reset</button> 
        <h1>Stopwatch</h1>
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>     
      </div>
      </div> 
      <div>
      <button><Link to='/' style={{textDecoration:'none', color: 'antiquewhite'}}>Clock</Link></button>
      <button><Link to='/stopwatch' style={{textDecoration:'none', color: 'antiquewhite'}}>Stopwatch</Link></button>
      </div>
    </div>
    
  )
}

export default Stopwatch