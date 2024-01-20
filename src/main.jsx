import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Categories from './components/Categories/Categories.jsx';
import Meal from './components/Meal/Meal.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <App/>
      }
      ,
      {
        path: '/categories',
        element: <Categories/>,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      },
      {
        path: '/categories/:categoryId',
        element: <Categories/>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`)
      },
      {
        path: "/meal/:mealId",
        element: <Meal/>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
