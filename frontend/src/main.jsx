import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Profil from './pages/Profil.jsx';
import EditUserData from './pages/EditUserData.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profil />} />
        <Route path='/edit' element={<EditUserData />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
