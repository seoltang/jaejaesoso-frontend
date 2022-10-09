import React from 'react';
import '../../../../../index.css';

const CuratingItem = () => {
  return (
    <div className="space-y-1 bg-white">
      <h3>도키도키키친</h3>
      <div className="text-sm text-neutral-500">
        맛있으면 우는 고양이
        야오옹야옹야옹냐아아아아아옹야오옹야옹야옹냐아아아아아옹
      </div>
      <div>
        <img
          alt="curating"
          src="/images/fried-eggplant.png"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CuratingItem;
