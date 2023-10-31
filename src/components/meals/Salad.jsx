import React, {useEffect, useState} from 'react'
import './Salad.css'
export default function Salad() {
    let[salad,setSalad]=useState([]);
    const getSalad=async()=>{
        let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
        let result=await response.json();
        setSalad(result.recipes);
    }
    useEffect( ()=>{
        getSalad();
    },[])
  return (
    <div className='row'>
    {
    salad.map( (ele)=>{
        return <div className='col-md-4' key={ele.recipe_id}>
            <img src={ele.image_url} className='w-75 pt-5'/>
            <div className="content3 rounded-bottom-3">
            <h2>{ele.title}</h2>
            </div>
           
        </div>
        
    } )
}
</div>
  )
}
