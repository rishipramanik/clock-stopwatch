import React, { useEffect } from "react";
import {useState} from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

import './Clock.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () =>{
    setDate(new Date());
  }

  useEffect(()=> {
    const timerId = setInterval(refreshClock, 1000);
    return function clean() {
        clearInterval(timerId)
    }
  },[])

  return (
      <div className="clock">
          <h1>Clock</h1>
  <span>
  {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
  </span>
  <div className="btn">
      <button><Link to='/' style={{textDecoration:'none', color: 'antiquewhite'}}>Clock</Link></button>
      <button><Link to='/stopwatch' style={{textDecoration:'none', color: 'antiquewhite'}}>Stopwatch</Link></button>
      </div>
      <Outlet />
  </div>
  )
};

export default Clock;
