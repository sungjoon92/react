import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
// import Hellow from "../pages/Hellow";
import RootLayout from "../RootLayout";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound></NotFound>,
    children: [
      { /* path: "", */ index: true, element: <Home></Home> },
      { path: "/posts", element: <PostList></PostList> },
      { path: "/posts/:postId", element: <PostDetail></PostDetail> },
    ],
  },
]);
export default router;
