import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <News/>
        <Blog/>
    </div>
  )
}

export default Home