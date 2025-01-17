import axios from "axios";
import store from "../store/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

// interceptor
api.interceptors.request.use((config) => {
  // Axios의 요청(Request)에 대해 인터셉터(interceptor)를 설정합니다.
  // 요청이 서버로 전송되기 전에 이 함수가 호출되어 요청을 수정할 수 있습니다.

  const token = store.getState().auth.token;
  // Redux의 상태에서 'auth'의 'token' 값을 가져옵니다.
  // 이 토큰은 사용자가 인증된 상태라면 존재하고, 그렇지 않다면 null 또는 undefined일 것입니다.

  if (token) {
    // 'token' 값이 존재하는 경우(즉, 사용자가 로그인한 상태인 경우) 조건문이 실행됩니다.
    config.headers.Authorization = `Bearer ${token}`;
    // 요청의 헤더에 'Authorization' 필드를 추가하고, 값으로 'Bearer {token}'을 설정합니다.
    // 이것은 서버 측에서 사용자 인증을 위한 일반적인 방식입니다.
    // 'Bearer'는 인증 스키마 중 하나로, 토큰을 포함한 요청임을 나타냅니다.
  }

  return config;
  // 수정된 요청 객체(`config`)를 반환합니다.
  // 반환된 요청은 서버로 전송됩니다.
});
export default api;
