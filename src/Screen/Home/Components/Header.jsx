import React from 'react'
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { Navigation } from 'lucide-react'
const Header = () => {
  const navigation=useNavigate()
  return (
    <div className='flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg   '>
      <button className="btn btn-primary btn-sm md:btn-md "
      
      onClick={()=>{
        navigation('/new')
      }}
      >+New Idea</button>
    
    <h2 className='font-bold text-sm md:text-2xl'>Top 20 Ideas</h2>
 
 <div className="flex gap-2 items-center">

    <img src={logo} alt=""   className='w-10 h-10 rounded-full bg-white'/>

    <h2 className='font-bold text-sm hidden md:block italic'>InspireHub</h2>
     
 </div>
 
    </div>
  )
} 

export default Header
