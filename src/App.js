import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './page/home';
import Login from './page/login';
import Profile from './page/profil';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home/>
       </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login/>
       </div>
    ),
  },
  {
    path: "/api/auth/google/callback",
    element: (
      <div>
        <Profile/>
       </div>
    ),
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
