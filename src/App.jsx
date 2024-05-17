import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import HumanBody from './Components/HumanBody'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skelton" element={<HumanBody/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
