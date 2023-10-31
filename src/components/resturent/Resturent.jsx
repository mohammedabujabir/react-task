import React from 'react'
import { Link } from 'react-router-dom'
import './Resturent.css'

export default function Resturent() {
  return (
   <section className='Resturent'>
    <div className="title d-flex justify-content-center py-5 mt-5">
    <h1>resturent</h1>
    </div>
   
    <div className="row">
      <div className="col-md-4">
      <div className="pizza-img">
      <img src='./img/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg' alt='img' className='w-75'/>
    </div>
    <div className="contents">
      <h2>Pizza</h2>
      <Link to='/pizaa'  className='text text-danger text-decoration-none'>readmore</Link>
    </div>
      </div>
      <div className="col-md-4">
      <div className="salad-img">
      <img src='./img/images.jpeg' alt='img' className='w-75'/>
    </div>
    <div className="contents">
      <h2>salad</h2>
      <Link to='/salad'  className='text text-danger text-decoration-none'>readmord</Link>
    </div>
      </div>
      <div className="col-md-4">
      <div className="onion-img">
      <img src='./img/download.jpeg' alt='img' className='w-50'/>
    </div>
    <div className="contents">
      <h2>onion</h2>
      <Link to='/onion'  className='text text-danger text-decoration-none '>readmore</Link>
    </div>
      </div>
    </div>
    
   </section>
  )
}

/*
 <div className='resturent  d-flex justify-content-center   mt-5 bg-dark h-50 '>
  
    <ul className='lest d-flex justify-content-center mt-5 py-5 gap-5 '>
        <li>
            <Link to='/pizaa'  className='text text-danger text-decoration-none'>Pizza</Link>
          
            
        </li>
        <li>   <Link to='/onion'  className='text text-danger text-decoration-none '>onion</Link></li>
        <li><Link to='/salad'  className='text text-danger text-decoration-none'>salad</Link></li>
    </ul>
    
   </div>*/