import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
