
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/errorComponent/Error.js';
import Contact from './Components/contactComponent/Contact.js';
import Home from './Components/homeComponent/Home.js';
import FetchProductById1 from './Components/productComponent/FetchProductById.js';
import FetchProduct from './Components/productComponent/FetchProduct.js';
import Cart from './Components/cartComponent/Cart.js';
import Login from './Components/authComponent/Login.js';
import Signup from './Components/authComponent/Signup.js';
import Checkout from './Components/checkoutComponent/Checkout.js';

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <FetchProduct />
      },
      {
        path: "/products/:productId",
        element: <FetchProductById1 />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
