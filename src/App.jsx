import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./pages/router";

function App() {
  console.log("Header rendu");

  return <RouterProvider router={router} />;
}

export default App;
