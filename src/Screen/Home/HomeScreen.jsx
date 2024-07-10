import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Tabs from './Components/Tabs'
import { useLocation } from 'react-router-dom'
import { db } from '../../..//Utils/index'
import { Ideas } from '../../../Utils/schema'
import { desc, Param } from 'drizzle-orm'
import IdeaList from './Components/IdeaList'

const HomeScreen = () => {
  const params = useLocation();
  const[ideaList,setIdeaList]=useState([])
  useEffect(() => {

    GetAllIdeas()
  }, [params])
  const GetAllIdeas = async () => {
    const result = await db.select().from(Ideas)
      .orderBy(desc(params.hash == '#hot' || params.hash == '#top' ? Ideas.vote : Ideas.id))
      .limit(20)
    //console.log(result);
    setIdeaList(result)
  }
  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={GetAllIdeas}/>
    </div>
  )
}

export default HomeScreen
