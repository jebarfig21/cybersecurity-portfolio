// src/router/index.tsx
//BrowserRouter breaks with GH pages
import { createBrowserRouter } from "react-router-dom";
//import { createHashRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";      // Asegúrate de crear este archivo
import Projects from "@/pages/Projects"; // Asegúrate de crear este archivo
import TalksAndPubs from "@/pages/TalksAndPubs"; // Asegúrate de crear este archivo
import ComingSoon from "@/pages/ComingSoon";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "talksAndPubs",
          element: <TalksAndPubs />,
        },
        {
          path: "comingSoon",
          element: <ComingSoon />,
        }
      ],
    },
  ],
);