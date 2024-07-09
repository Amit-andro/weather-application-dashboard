// src/App.js
import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import Navbar from "./components/Header/Navbar";
import Travelers from "./components/Travelers/Travelers";
import EventPlanner from "./components/Event Planner/EventPlanner";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/farmer" element={<WeatherDashboard />} />
          <Route path="/event-planner" element={<EventPlanner />} />
          <Route path="/travelers" element={<Travelers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
