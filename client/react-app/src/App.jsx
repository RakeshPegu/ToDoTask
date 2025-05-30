import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home';
import Register from './routes/Register';
import Login from './routes/Login';
import TaskPage from './routes/taskhPage';
import CreateTask from './routes/createTask';
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
  }

])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
