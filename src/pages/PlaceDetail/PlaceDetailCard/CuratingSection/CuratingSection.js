import React from 'react';
import CuratingItem from './CuratingItem/CuratingItem';
import '../../../../index.css';

const CuratingSection = () => {
  return (
    <div className="h-fit rounded-2xl bg-white shadow-lg p-4">
      <div className="text-theme-coral">
        <h3 className="text-neutral-400">
          <div>
            <span className="font-medium text-theme-coral">
              맛있으면짖는댕댕
            </span>
            님이
          </div>
          <div>
            <span className="font-medium text-neutral-800">중앙감속기</span>와
            함께 추천하는
          </div>
        </h3>
        <h2 className="font-bold text-2xl break-words">
          나만 알고 싶은 찐맛집
        </h2>
      </div>
      <div className="flex flex-row lg:flex-col pt-4 space-x-2 space lg:space-x-0 lg:space-y-4">
        <CuratingItem />
        <CuratingItem />
        <CuratingItem />
      </div>
    </div>
  );
};

export default CuratingSection;
