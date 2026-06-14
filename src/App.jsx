import React from "react";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";
import Values from "./components/Values/Values";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";

const App = () => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/fruits",
            element: <Fruits />,
          },
          {
            path: "/dairy",
            element: <Dairy />,
          },
          {
            path: "/seafood",
            element: <SeaFood />,
          },
          {
            path: "/allproducts",
            element: <AllProducts />,
          },
          {
            path: "/aboutUs",
            element: <Values />,
          },
          {
            path: "/process",
            element: <Process />,
          },
          {
            path: "/contactUs",
            element: <Footer />,
          },
        ],
      },
    ],
    {
      basename: "/grocery-platform",
    },
  );

  return <RouterProvider router={router} />;
};

export default App;
