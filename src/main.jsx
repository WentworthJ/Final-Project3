import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import routes from "./routes";
import Places from "./Places";


const router = createBrowserRouter(routes);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




