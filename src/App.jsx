import React from 'react'
import Product from './components/prodect/Prodect.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Resturent from './components/resturent/Resturent.jsx'
import PageNotFound from './components/pagenotfound/PageNotFound.jsx'
import Home from './components/home/Home.jsx'
import Pizaa from './components/meals/Pizaa.jsx'
import Onion from './components/meals/Onion.jsx'
import Salad from './components/meals/Salad.jsx'
export default function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/resturent' element={<Resturent/>}/>
         <Route path='/pizaa' element={<Pizaa/>}/>
         <Route path='/onion' element={<Onion/>}/>
         <Route path='/salad' element={<Salad/>}/>
         <Route path='*' element={<PageNotFound/>}/>
       </Routes>
    </BrowserRouter>
  

  </>
  )
}
