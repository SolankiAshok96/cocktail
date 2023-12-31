import React from 'react'

import './App.css'
import Layout from './componets/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './componets/PageNotFound'
import SearchBox from './componets/SearchBox'

function App() {
  

  return (
    <>
       <Routes>
           <Route path='/' element= {
             <>
               <Layout>
               <SearchBox/>
              <HomePage/>
               </Layout>
              
             </>
           }/>
           <Route path='/products/:id' element={<ProductDetails/>}/>
           <Route path='*' element= {<PageNotFound/>}/>
       </Routes>
     
    </>
  )
}

export default App
