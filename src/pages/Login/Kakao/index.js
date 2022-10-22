import React, { useEffect } from 'react';
import axios from 'axios';

const Kakao = () => {
  useEffect(() => {
    let params = new URL(window.location.href).searchParams;
    let code = params.get('code');

    axios({
      method: 'post',
      url: 'localhost:3000/users/oauth/callback/kakao',
      data: {
        code,
      },
    });
  }, []);

  return <div>카카오 로그인 중</div>;
};

export default Kakao;
