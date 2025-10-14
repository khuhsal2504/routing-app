
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/errorComponent/Error.js';
import Contact from './Components/contactComponent/Contact.js';
import Home from './Components/homeComponent/Home.js';
import FetchProductById1 from './Components/productComponent/FetchProductById.js';
import FetchProduct from './Components/productComponent/FetchProduct.js';
let routes=createBrowserRouter([
{
path:"/",
element:<App/>,
errorElement:<Error/>,
children:[
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/home",
        index:true,
        element:<Home/>
    },
    {
        path:"/products",
        element:<FetchProduct/>
    },
    {
        path:"/products/:productId",
        element:<FetchProductById1/>
    }
]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// <React.StrictMode>
// <App />
// </React.StrictMode>
<RouterProvider router={routes}/>
);
