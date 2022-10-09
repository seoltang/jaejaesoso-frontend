import React from 'react';

const Hashtag = ({ tagName }) => {
  return (
    <button className="inline-flex bg-theme-lightpeach rounded-full px-2 py-1 text-sm text-theme-coral shadow-sm hover:bg-theme-coral hover:text-white active:shadow-inner">
      <div>#</div>
      <div>{tagName}</div>
    </button>
  );
};

export default Hashtag;
