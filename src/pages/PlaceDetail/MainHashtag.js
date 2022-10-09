import React from 'react';
import Hashtag from './Hashtag';
import '../../index.css';

const MainHashtag = () => {
  return (
    <div className="flex flex-wrap pt-4 gap-2">
      {['성수동맛집', '최현석', '중식이탈리안퓨전', '새로운맛', '예약필수'].map(
        (tag, index) => (
          <Hashtag key={index} tagName={tag} />
        )
      )}
    </div>
  );
};

export default MainHashtag;
