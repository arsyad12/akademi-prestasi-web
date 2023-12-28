import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './page/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home/>
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
