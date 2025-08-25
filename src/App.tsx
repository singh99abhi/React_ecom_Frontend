import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import ProductPage from './Components/ProductPage'
import TopSeller from './Components/TopSeller'
import PopularBlog from './Components/PopularBlog'

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar></Sidebar>
        <div className='rounded w-full flex flex-justify-between flex-wrap'>
          <Routes>
            <Route path='/' element={<MainContent></MainContent>}></Route>
            <Route path='/product/:id' element={<ProductPage></ProductPage>}></Route>

          </Routes>


          <div>
             <TopSeller></TopSeller>
             <PopularBlog></PopularBlog>
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App