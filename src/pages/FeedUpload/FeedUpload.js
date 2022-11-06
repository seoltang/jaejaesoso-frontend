import React, { useState } from 'react';
import '../../index.css';

function FeedUpload() {
  const [feedUploadValue, setFeedUploadValue] = useState({
    feedTitle: '',
    feedContent: '',
    feedhashTag: [],
  });
  const { feedTitle, feedContent } = feedUploadValue;

  const handleValue = e => {
    const { name, value } = e.target;
    setFeedUploadValue({
      ...feedUploadValue,
      [name]: value,
    });
  };

  //========== 취소 버튼 클릭 ==========//
  const clickCancleBtn = () => {
    // window.location.href = '/'; => 취소 버튼 클릭 시 이동할 페이지
    console.log('취소');
  };

  //========== 저장 버튼 클릭 ==========//
  const clickSaveBtn = () => {
    // window.location.href = '/'; => 저장 버튼 클릭 시 이동할 페이지
    console.log('저장');
    console.log(feedUploadValue);
  };

  return (
    <div className="flex justify-center bg-neutral-50">
      <div className="flex justify-center flex-col w-1/2 p-8 my-8 border rounded-2xl bg-white shadow-lg ">
        {/* ========== 제목 입력 ========== */}
        <input
          className="h-10 mb-6 p-2 border rounded-lg"
          placeholder="제목"
          name="feedTitle"
          onChange={handleValue}
          value={feedTitle}
        />

        {/* ========== 해시태그 ========== */}
        <div className="h-10 mb-6 p-2 border rounded-lg">해시태그</div>

        {/* ========== 내용입력 ========== */}
        <textarea
          className="w-auto h-60 mb-6 p-2 border rounded-lg overflow-scroll"
          placeholder="내용을 입력하세요."
          name="feedContent"
          onChange={handleValue}
          value={feedContent}
        />

        {/* ========== 버튼 ========== */}
        <div className="flex justify-end ">
          <button
            className="mr-1 py-1 px-2 rounded-lg text-neutral-400 hover:bg-theme-coral hover:text-white "
            onClick={() => {
              clickCancleBtn();
            }}
          >
            취소
          </button>
          <button
            className="py-1 px-2 rounded-lg text-neutral-400 hover:bg-theme-coral hover:text-white"
            onClick={() => {
              clickSaveBtn();
            }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedUpload;
