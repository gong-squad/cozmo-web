import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Shops } from './Components/Shops'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/hello-world",
    element: <div>Hello world!</div>,
  },
  {
    path: "/shops",
    element: <Shops/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
