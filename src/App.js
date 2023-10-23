import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/homePage.js';
import AuthPage from './pages/authPage.js';
import MainPage from './pages/mainPage.js';

function App() {
  return (
    <div>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>

    </div>
  );
}

export default App;