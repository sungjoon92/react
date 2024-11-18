import axios from "axios";
// env파일 안의 환경변수 땡겨오는법

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// axios.get("http://localhost:3000/posts")
// axios.get(`http://localhost:3000/posts/${postId}`)
// 위의 코드를 아래처럼 사용할 수 있다.
// instance.get('')
// instance.get(`/${postId}`)

export default instance;
