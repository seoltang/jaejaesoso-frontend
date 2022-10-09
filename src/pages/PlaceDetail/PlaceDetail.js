import React from 'react';
import PlaceInfoSection from './PlaceInfoSection';
import PlaceDetailCard from './PlaceDetailCard';
import '../../index.css';

const PlaceDetail = () => {
  return (
    <div className="flex justify-center bg-gray-50">
      <div className="max-w-7xl px-8 my-8">
        <div className="flex space-x-4">
          <PlaceInfoSection />
          <PlaceDetailCard />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
