import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import PrivateRoute from './PrivateRoute'
import Checkout from '../Pages/Checkout'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AddHome from '../Pages/Dashboard/AddHome'
import ManageHomes from '../Pages/Dashboard/ManageHomes'
import AllHome from '../Pages/AllHome'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/all-homes',
        element: <AllHome></AllHome>
      },
      {
        path: '/service-details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/home/${params.id}`),
      },
      {
        path: '/search-result',
        element: <SearchResult></SearchResult>,
      },
      {
        path: '/checkout',
        element:
          <Checkout></Checkout>

      },

    ],

  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: '',
        element: <Welcome></Welcome>
      },
      {
        path: 'my-bookings',
        element: <PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path: 'become-host',
        element: <PrivateRoute>
          <BecomeAHost></BecomeAHost>
        </PrivateRoute>
      },
      {
        path: 'all-users',
        element: <PrivateRoute>
          <AllUsers></AllUsers>
        </PrivateRoute>
      },
      {
        path: 'all-bookings',
        element: <PrivateRoute>
          <AllBookings></AllBookings>
        </PrivateRoute>
      },
      {
        path: 'add-home',
        element: <PrivateRoute>
          <AddHome></AddHome>
        </PrivateRoute>
      },
      {
        path: 'manage-homes',
        element: <PrivateRoute>
          <ManageHomes></ManageHomes>
        </PrivateRoute>
      },
    ]
  },
])

export default router
