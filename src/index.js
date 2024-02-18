import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/about/About';
import Contact from './component/contact/Contact'
import Error from './component/restaurantComponent/Error';
import Body from './component/body/Body';
import RestaurantMenu from './component/restaurantComponent/RestaurantMenu';
import About1 from './component/about/About1';
import About2 from './component/about/About2';
import Shimmer from './component/body/Shimmer';
import Cart from './component/restaurantComponent/Cart';

// upon On Demand Loading -> upon render -> suspend loading
// Never write lazy loading in functional component because it will lazy load on every cycle
const Instamart = lazy(() => import('./component/instamart/Instamart'))

// when loading component on demand, react tries to render it but suspend loading so error occurs, so we use suspense

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      // {
      //   path: "/about",
      //   element: <About />,
      //   children: [
      //     {
      //       path: 'about1', // relative path
      //       element: <About1 />
      //     },
      //     {
      //       path: 'about2',
      //       element: <About2 />
      //     }
      //   ]
      // },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurantmenu/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


