import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';
import FeedUpload from './pages/FeedUpload/FeedUpload';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PlaceDetail />} />
        <Route path="feedUpload" element={<FeedUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
