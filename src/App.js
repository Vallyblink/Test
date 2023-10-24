import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/store.js';

import HomePage from './pages/homePage.js';
import AuthPage from './pages/authPage.js';
import MainPage from './pages/mainPage.js';

function App() {
  return (
    <div>
      <Provider store = {store}>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;