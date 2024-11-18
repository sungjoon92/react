import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import MovieList from "../pages/MovieList";

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
        path: "/MovieList",
        element: <MovieList></MovieList>,
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
