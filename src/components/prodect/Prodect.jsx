import React, {useEffect ,useState} from 'react'

export default function Prodect() {
  let [products,setProducts]=useState([]);
  const getProducts= async()=>{
    let respnose=await fetch("https://fakestoreapi.com/products");
    let data= await respnose.json();
    setProducts(data);
  }
  useEffect( ()=>{
    getProducts();
  },[] )
  return (
   <div className='row'>
    {
    products.map( (ele)=>{
        return <div className='col-md-4' key={ele.id}>
            <img src={ele.image} className='w-75 pt-5'/>
            <h2>{ele.title}</h2>
        </div>
    } )
}
   </div>
  )
}
