import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import HomePart from '../components/HomePart'
import ProjectPart from '../components/Project'
import Ourfeature from '../components/Ourfeature'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HomePart/>
      <ProjectPart/>
      <Ourfeature/>
    </>
  )
}

export default Home