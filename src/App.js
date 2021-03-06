import Clock from "./Clock";
import "./App.css";
import Stopwatch from "./Stopwatch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Clock />} />
              <Route path="/stopwatch" element={<Stopwatch />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
