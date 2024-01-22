import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ShowNews from './ShowNews'
import Navbar from './Navbar'
import './App.css'



function App() {
  let[News,setnews]=useState([])

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=75c4cf2d006d407ebe17ae02c4f315fb`)
    .then((res)=>{
      // console.log(res.data.articles)
      setnews(res.data.articles)
    })
  },[])
  return (

    <>

    
    <div>
        
        <Navbar nav={{name:'ShubhNews'}}></Navbar> 
       
        <ShowNews news={News}></ShowNews>
          
       
      
      </div>
    
    </>
  )
}

export default App
