import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./reset.css";
import "./App.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
