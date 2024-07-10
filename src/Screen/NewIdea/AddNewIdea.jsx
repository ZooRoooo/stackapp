import React, { useEffect, useState } from 'react'
import Header from '../Home/Components/Header'
import { ChevronLeft, Send,Info } from 'lucide-react'
import { db } from '../../../Utils';
import { Ideas } from '../../../Utils/schema';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const AddNewIdea = () => {
  const navigation=useNavigate()
  const[idea,setIdea]=useState();
  const [usename,setusername]=useState()
  const[showAlert,setShowalert]=useState(false)
   const[exitingUser,setExtishgUser]=useState(false)
   useEffect(()=>{


    if(localStorage.getItem('username'))
    {

      setusername(localStorage.getItem('username'))
      setExtishgUser(true)
    }
   },[])



  const onsaveHandle=async()=>{

const result=await db.insert(Ideas)
.values({

  content:idea,
  username:usename,
  createdAt:moment().format('DD MM yyyy')
}).returning({id:Ideas.id })
if(result)
{
  localStorage.setItem('usename',usename)
  //console.log("Insert  data");
  setusername('')
setIdea('')
  setShowalert(true)
  setTimeout(()=>{
    setShowalert(false)
  },5000)
}
  }
  return (
    <div>
        <Header/>

       {showAlert &&<div role="alert" className="alert alert-success mt-5 shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span className=''>Your Idea is Added 🥳</span>
</div>}

       <button className='btn mt-7'
       onClick={()=>{
        navigation('/')
       }}
       
       
       >
        <ChevronLeft/>
        Back</button>
       <h2 className='font-bold text-2xl mt-5'>From Conception to Creation:Empowering your startup Journey </h2>


<div className="flex flex-col mt-7 gap-2">

        <label>Your Idea *</label>
        <textarea 
         value={idea}
        onChange={(event)=>setIdea(event.target.value)}
        className="textarea textarea-bordered border-primary" placeholder="enter your idea"></textarea>

       </div>

       
      {!exitingUser&& <div className="flex flex-col mt-7 gap-2">

        <label className='flex justify-between'>Your Username *

            <span className='flex items-center gap-2 txt-sm' > <Info h-4 w-4 />No Account is needed</span>
            
        </label>
        <input type="text"
        value={usename}
          onChange={(event)=>setusername(event.target.value)}
        
        placeholder="Username" className="input input-bordered w-full  border-primary" />
       </div> }



       <button className='btn w-full btn-primary mt-7 '
       
disabled={!(idea&&usename)}
onClick={()=>onsaveHandle()}
       > Send

        <Send h-4 w-4/>
       </button>
    </div>
  )
}

export default AddNewIdea
