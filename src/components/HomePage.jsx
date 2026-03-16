import React from 'react'
import Nabar from './Nabar'
import Footer from './Footer'
import Home from './Home'
import Popular from './Popular'
import Slide from './Slide'
import FilterProduct from './FilterProduct'
import FeedBack from './FeedBack'
import { Contact } from 'lucide-react'

const HomePage = () => {
  return (
    <div className='overflow-hidde'>
        <Nabar/>
        <Home/>
        <Popular/>
        <Slide/>
        <FilterProduct/>
        <FeedBack/>
        <Footer/>
    </div>
  )
}

export default HomePage