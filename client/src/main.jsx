import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';

import App from './App.jsx';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Success from './pages/Success';
// import Profile from './pages/Profile';
// import Character from './pages/Character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      }
      // , {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, {
      //   path: '/success',
      //   element: <Success />
      // }, {
      //   path: '/profile',
      //   element: <Profile />
      // }, {
      //   path: '/character/:name',
      //   element: <Character />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
