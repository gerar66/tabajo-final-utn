import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Excursiones from './components/Excursiones';
import Contactenos from './components/Contactenos';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/excursiones",
    element: <Excursiones/>,
  },
  {
    path: "/contactenos",
    element: <Contactenos/>,
  },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
