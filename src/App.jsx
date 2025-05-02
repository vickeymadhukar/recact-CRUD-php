import React from 'react'
import {BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateUser from './CreateUser';
import Navbar from './Navbar';
import ListUser from './ListUser';
import EditUser from './EditUser';

const router = createBrowserRouter(
  [
    {
      path:'*',
      element:<div>
       <Navbar/>
     
      </div>
       },
    {
   path:'/createuser',
   element:<div>
    <Navbar/>
    <CreateUser/>
   </div>
    },
    {
    path:'/listuser',
    element:<div>
    <Navbar/>
    <ListUser/>
   </div>

    },
    {
      path:'/edituser',
      element:<div>
    <Navbar/>
    <EditUser/>
   </div>
    }
  ]
);

const App = () => {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
