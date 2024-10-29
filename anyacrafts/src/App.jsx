import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoginPage from './LoginPage';
import ForgotPassword from './pages/ForgotPassword'; // Import ForgotPassword component

import { UserProvider } from './components/UserContext';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' elements={<MainLayout />}>
        <Route index element={<LoginPage />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Route>
    )
  );

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
};

export default App;
