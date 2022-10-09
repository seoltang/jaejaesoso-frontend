import React from 'react';
import '../../index.css';
import Hashtag from './Hashtag';

const FeedSection = () => {
  return (
    <div className="flex-col rounded-2xl bg-white shadow-lg">
      <div className="px-8 py-6">
        <div className="flex items-center space-x-2 pb-2">
          <div className="w-8 h-8">
            <img
              className="rounded-full"
              alt="profile"
              src="/images/pink.png"
            />
          </div>
          <div className="text-neutral-500">맛있으면짖는댕댕</div>
        </div>
        <div className="py-2 mb-2">
          아르르를왈왈크르릉크르르르르아르를아르르르왈왈크릉크르릉아르르를왈왈크르릉크르르르르아르를아르르르왈왈크릉크르릉아르르를왈왈크르릉크르르르르아르를아르르르왈왈크릉크르릉아르르를왈왈크르릉크르르르르아르를아르르르왈왈크릉크르릉아르르를왈왈크르릉크르르르르아르를아르르르왈왈크릉크르릉
        </div>
        <div className="space-x-2 space-y-2">
          {[
            '성수동',
            '데이트',
            '중식이탈리안퓨전',
            '보장된퀄리티',
            '오이에이드',
            '고수에이드',
          ].map((tag, index) => (
            <Hashtag key={index} tagName={tag} />
          ))}
        </div>
      </div>
      <img className="rounded-b-2xl" alt="feed" src="/images/bologna.png" />
    </div>
  );
};

export default FeedSection;
