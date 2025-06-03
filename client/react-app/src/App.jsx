import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home';
import Register from './routes/Register';
import Login from './routes/Login';
import TaskPage from './routes/taskhPage';
import CreateTask from './routes/createTask';
import ProfileLayout from './layout/profileLayout';
import DailyGraph from './graph/dailyGraph';
import Weekly from './graph/weeklyGraph';
import MonthlyGraph from './graph/MonthlyGraph';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    
  }, 
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/tasks",
    element:<TaskPage/>
  },
  {
    path:"/create_task",
    element:<CreateTask/>
  },
  {
    path:"/profile",
    element:<ProfileLayout/>,
    children: [
      {
        path:"daily",
        element:<DailyGraph/>
      },
      {
        path:"weekly",
        element:<Weekly/>
      },
      {
        path:"monthly",
        element:<MonthlyGraph/>
      }
    ]
  }

])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
