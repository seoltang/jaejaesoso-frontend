const REST_API_KEY = '9f7cabe5fceeb31eb40f58fc5d78c7e9';
const REDIRECT_URI = 'http://localhost:3000/users/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
