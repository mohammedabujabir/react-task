import React, {useEffect, useState} from 'react'
import './Onion.css'
export default function Onion() {
    let[onion,setOnion]=useState([]);
    const getOnion=async()=>{
        let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=onion');
        let result=await response.json();
        setOnion(result.recipes);
    }
    useEffect( ()=>{
        getOnion();
    },[])
  return (
    <div className='row'>
        {
        onion.map( (ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                
            <img src={ele.image_url} className='w-75 pt-5'/>
            <div className="content2 rounded-bottom-3">
            <h2>{ele.title}</h2>
            </div>
               
            </div>
            
        } )
    }
    </div>
    
  )
}
