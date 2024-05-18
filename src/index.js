import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Pages/SharedComponent/Navbar';
import Footer from './Pages/SharedComponent/Footer';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const RootComponent = () => {
  const location = useLocation();
  const hiddenNav = location.pathname === "/blog";

  return (
    <>
      {!hiddenNav && <Navbar />}
      <App />
      {!hiddenNav && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RootComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
