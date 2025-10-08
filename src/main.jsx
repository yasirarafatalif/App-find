import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, data, RouterProvider } from 'react-router'
import Root from './RootLayOuts/Root.jsx'
import Home from './Components/Home/Home.jsx'
import AllCard from './Components/AllCardSection/AllCard.jsx'
import InstallApp from './Components/InstallAppSection/InstallApp.jsx'
import SellInstallApp from './Components/SeeInstallApp/SellInstallApp.jsx'
import axios from 'axios/unsafe/axios.js'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      { index: true, Component:Home},
      { path:'/home',Component: Home },
      {path:'/card', Component:AllCard },
      { path:"/install" ,Component:InstallApp },
      { path:'/apps/:id' ,
        // loader: ()=>fetch('myData.json'),
        Component:SellInstallApp },
      { path: "/about", element: <p> this is about </p>}

    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

