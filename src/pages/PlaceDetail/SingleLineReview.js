import React from 'react';
import '../../index.css';

const SingleLineReview = ({ content, count, repliedCount }) => {
  return (
    <div className="relative p-1 rounded-full text-sm bg-white shadow-sm">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-theme-peach"
        style={{
          width: `${(count / repliedCount) * 100}%`,
          opacity: count / repliedCount,
        }}
      />
      <div className="flex space-x-2">
        <div className="grow pl-2 z-10">{content}</div>
        <div className="pr-2 text-neutral-400 z-10">{count}</div>
      </div>
    </div>
  );
};

export default SingleLineReview;
