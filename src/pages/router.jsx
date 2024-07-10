import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import DetailsPage from "./DetailsPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search/:searchPackage",
        element: <SearchPage />,
      },
      {
        path: "package/:packageName",
        element: <DetailsPage />,
      },
    ],
  },
]);

export default router;
