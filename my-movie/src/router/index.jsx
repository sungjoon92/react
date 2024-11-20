import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/Movies/MovieDetail";
import Category from "../pages/MovieList/Category";
import Mypage from "../pages/Mypage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mypage",
        element: <Mypage></Mypage>,
      },
      {
        path: "/movie/list",
        element: <MovieList></MovieList>,
      },
      {
        path: "/movie/detail/:movieId",
        element: <MovieDetail></MovieDetail>,
      },
      {
        path: "/movie/category/:category",
        element: <Category></Category>,
      },
    ],
  },
  { path: "NotFound", element: <NotFound></NotFound> },
  // {
  //   path: '/music',
  //   element: <musiclayout></musiclayout>
  // }
]);

export default router;
