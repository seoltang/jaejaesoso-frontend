import React from 'react';
import RevisitIntention from './RevisitIntention';
import SingleLineReview from './SingleLineReview';
import MainHashtag from './MainHashtag';
import '../../../index.css';

const SINGLE_LINE_REVIEW_DATA = [
  {
    id: 0,
    content: '맛있어요',
    count: 25,
  },
  {
    id: 1,
    content: '음식이 특색 있어요',
    count: 17,
  },
  {
    id: 2,
    content: '분위기가 좋아요',
    count: 15,
  },
  {
    id: 3,
    content: '인테리어가 예뻐요',
    count: 8,
  },
  {
    id: 4,
    content: '사장님이 친절해요',
    count: 5,
  },
];

let repliedCount = 30;

const PlaceInfoSection = () => {
  return (
    <div className="basis-1/6 relative flex-col py-4">
      <div className="sticky top-8">
        <h1 className="mb-8 pl-1 text-4xl font-extrabold">중앙감속기</h1>
        <RevisitIntention />
        <div className="flex flex-col gap-2">
          {SINGLE_LINE_REVIEW_DATA.map(({ id, content, count }) => (
            <SingleLineReview
              key={id}
              content={content}
              count={count}
              repliedCount={repliedCount}
            />
          ))}
        </div>
        <MainHashtag />
      </div>
    </div>
  );
};

export default PlaceInfoSection;
