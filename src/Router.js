import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainFeed from './pages/MainFeed';
import Login from './pages/Login';
import Kakao from './pages/Login/Kakao';
import PlaceDetail from './pages/PlaceDetail';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/oauth/callback/kakao" element={<Kakao />} />
        <Route path="/placedetail" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
