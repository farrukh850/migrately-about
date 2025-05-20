import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add other routes here that should use the Layout
    ],
  },
]);
