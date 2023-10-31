import React, {useEffect ,useState} from 'react'
import './Pizza.css'
export default function Pizaa() {
    let [res,setRes]=useState([]);
    const getRes= async()=>{
      let respnose=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      let data= await respnose.json();
      setRes(data.recipes);
    }
    useEffect( ()=>{
        getRes();
      },[] )
  return (
    <div className='row'>
    {
    res.map( (ele)=>{
        return <div className='col-md-4' key={ele.recipe_id}>
            <img src={ele.image_url} className='w-75 pt-5 '/>
            <div className="content rounded-bottom-3">
            <h2>{ele.title}</h2>
            </div>
            
        </div>
    } )
}
   </div>
  )
}
