import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Category from './components/Category/Category.jsx';
import NewsLayout from './components/Layout/NewsLayout.jsx';
import News from './components/News/News.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import LoginLayout from './components/Layout/LoginLayout/LoginLayout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import TermsCondition from './components/TermsCondition/TermsCondition.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'termsCondition',
        element: <TermsCondition></TermsCondition>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ':category_id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://the-daily-news-server-6ll8ooa1x-rasel-chowdhury1s-projects.vercel.app/category/${params.category_id}`)
      }
    ]
  },

  {
    path:'news',
    element: <NewsLayout></NewsLayout>,
    children:[
      {
        path: ':news_id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-daily-news-server-6ll8ooa1x-rasel-chowdhury1s-projects.vercel.app/news/${params.news_id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
