import { useState } from 'react';

import Clock from './Clock';
import './App.css';
import Stopwatch from './Stopwatch';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  // const [isClock, setClock] = useState(true)
  // const [isStopwatch, setStopwatch] = useState(true)

  // const clockBtn = () => {
  //   setClock(!isClock);
  // };

  // const stopwatchBtn = () => {
  //  return (<Stopwatch />)
  // };


  return (
    <div className="App">
      <div className='card'>
      <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Clock />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
      </Routes>
      </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App;
