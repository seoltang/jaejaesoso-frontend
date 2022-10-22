import React from 'react';
import { KAKAO_AUTH_URL } from '../../OAuth';
import '../../index.css';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <h1 className="my-4 font-bold text-2xl">로그인</h1>
      {['이름', '이메일', '비밀번호'].map((label, i) => (
        <input type="text" className="border" key={i} placeholder={label} />
      ))}
      <a href={KAKAO_AUTH_URL}>
        <button className="flex items-center w-72 px-4 py-3 rounded-full bg-[#FEE500]">
          <img
            className="w-5"
            alt="카카오 로그인 버튼"
            src="/images/assets/kakao_login_symbol.png"
          />
          <div className="grow">카카오 로그인</div>
        </button>{' '}
      </a>
    </div>
  );
};

export default Login;
