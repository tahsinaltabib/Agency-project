import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import HomePart from '../components/HomePart'
import ProjectPart from '../components/Project'
import Ourfeature from '../components/Ourfeature'
import FAQ from '../components/FAQ'
import Form from '../components/Msg'
import Ourblog from '../components/Ourblog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HomePart/>
      <ProjectPart/>
      <Ourfeature />
      <FAQ/>
      <Form/>
      <Ourblog/>
      <Footer/>
    </>
  )
}

export default Home