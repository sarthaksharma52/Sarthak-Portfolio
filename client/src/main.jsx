import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMain from '../components/HomeMain';
import Contact from '../components/Contact';
import About1 from '../components/About1';
import Projects from '../components/Projects';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      {
        path: "About",
        element: <About1 />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
