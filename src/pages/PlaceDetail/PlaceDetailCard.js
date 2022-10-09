import React from 'react';
import FeedSection from './FeedSection';
import CuratingSection from './CuratingSection';
import '../../index.css';

const PlaceDetailCard = () => {
  return (
    <div className="basis-5/6 flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
      <div className="basis-3/4 flex flex-col gap-4">
        <FeedSection />
        <FeedSection />
        <FeedSection />
        <FeedSection />
      </div>
      <div className="basis-1/4 flex flex-col gap-4">
        <CuratingSection />
        <CuratingSection />
        <CuratingSection />
        <CuratingSection />
      </div>
    </div>
  );
};

export default PlaceDetailCard;
