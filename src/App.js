import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import HomePage from './pages/home/HomePage';
import ConsultPage from './pages/consult/ConsultPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </header>
        <footer>
          <SimpleBottomNavigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;