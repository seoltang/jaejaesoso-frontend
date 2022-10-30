import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

const Kakao = () => {
  useEffect(() => {
    let params = new URL(window.location.href).searchParams;
    let code = params.get('code');

    let data = qs.stringify({
      code: code,
    });

    let config = {
      method: 'post',
      url: 'http://localhost:8000/users/oauth/callback/kakao',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config, { withCredentials: true })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return <div>카카오 로그인 중</div>;
};

export default Kakao;
