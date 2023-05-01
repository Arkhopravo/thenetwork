import { useContext, useEffect,useState } from 'react';
import './App.css';
import './style.scss'
import { Register, Login, Home, Profile } from './pages';
import { createBrowserRouter, RouterProvider, Router,Route, Routes, Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import { DarkModeContext } from "./context/darkModeContext";
import Navbar from './components/navbar/Navbar.jsx';
import LeftBar from './components/leftBar/LeftBar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'

import { AuthContext } from "./context/authContext";


function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    // if (!currentUser) {
    //   return <Navigate to="/login" />;
    // }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
