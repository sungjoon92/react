import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import RootLayout from "../RootLayout";
import NotFound from "../pages/NotFound";
import Webtoon from "../pages/Webtoon";
import WebtoonDetail from "../pages/WebtoonDetail";
import Novel from "../pages/Novel";
import NovelDetail from "../pages/NovelDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound></NotFound>,
    children: [
      { /* path: "", */ index: true, element: <Home></Home> },
      { path: "/posts", element: <PostList></PostList> },
      { path: "/posts/:postId", element: <PostDetail></PostDetail> },
      {
        path: "/webtoon",
        element: <Webtoon></Webtoon>,
        children: [
          {
            path: ":webtoonId",
            element: <WebtoonDetail></WebtoonDetail>,
          },
        ],
      },

      {
        path: "/novel",
        element: <Novel></Novel>,
        children: [
          {
            path: ":novelId",
            element: <NovelDetail></NovelDetail>,
          },
        ],
      },
    ],
  },
]);
export default router;
