import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';

function App() {
  return (  
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/crew' element={<Crew/>} />
          <Route path='/technology' element={<Technology/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
