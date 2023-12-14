import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Category from './components/Category/Category.jsx';
import NewsLayout from './components/Layout/NewsLayout.jsx';
import News from './components/News/News.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:category_id',
        element: <Category></Category>
      }
    ]
  },

  {
    path:'news',
    element: <NewsLayout></NewsLayout>,
    children:[
      {
        path: ':news_id',
        element: <News></News>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
