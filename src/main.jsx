import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Addspots from './Add tourists spot/Addspots.jsx';
import All from './All tourists spot/All.jsx';
import Details from './Spot details/Details.jsx';
import Login from './Login and Register/Login.jsx';
import Register from './Login and Register/Register.jsx';
import Provider from './Shared/Provider.jsx';
import Private from './Private.jsx';
import CountrySpots from './Country Spots/CountrySpots.jsx';
import Mylist from './My List/Mylist.jsx';
import Update from './Update/Update.jsx';
import Pagenotfound from './404/Pagenotfound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Pagenotfound />,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('https://tourist-management-serverside.vercel.app/spots')
      },
      {
        path: '/add',
        element: <Private><Addspots/></Private>
      },
      {
        path: '/all-spots',
        element: <All/>,
        loader: () => fetch('https://tourist-management-serverside.vercel.app/spots')
      },
      {
        path: '/spots/:id',
        element: <Private><Details/></Private>,
        loader: ({params}) => fetch(`https://tourist-management-serverside.vercel.app/spots/${params.id}`)
      },
      {
        path: '/country/:country',
        element:<CountrySpots/>,
        loader: ({params}) => fetch(`https://tourist-management-serverside.vercel.app/country/${params.country}`)
      },
      {
        path: '/mylist/:email',
        element: <Private><Mylist/></Private>,
        loader: ({params}) => fetch(`https://tourist-management-serverside.vercel.app/${params.email}`)
      },
      {
        path: '/update/:id',
        element: <Private><Update/></Private>,
        loader: ({params}) => fetch(`https://tourist-management-serverside.vercel.app/spots/${params.id}`)
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
