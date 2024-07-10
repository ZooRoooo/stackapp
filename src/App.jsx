


import './App.css'
import HomeScreen from './Screen/Home/HomeScreen'
import { ThemeContext } from './Context/ThemeContext'
import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewIdea from './Screen/NewIdea/AddNewIdea'
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeScreen/>

  },
  {
    path:'/new',
    element:<AddNewIdea/>

  }
])
function App() {
  const[theme,setTheme]=useState('light')

  return (
    
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className='flex flex-col items-center p-4 md:p-10 '  data-theme={theme}>
      <div className=" max-w-2xl w-full  items-center ">

     <RouterProvider router={router}/>
        
      </div>

    </div>
    </ThemeContext.Provider>
     
  
  )
}

export default App
