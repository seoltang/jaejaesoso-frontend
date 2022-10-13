import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainFeed from './pages/MainFeed';
import Login from './pages/Login';
import PlaceDetail from './pages/PlaceDetail';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element />
        <Route path="/placedetail" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
