import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import BannerImg from '../assets/banner.png'
import Image from './Image'
import { IoIosArrowRoundForward } from "react-icons/io";


const Banner = () => {
  return (
    <section className='py-[128px] bg-[#1C1E53]'>
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className='text-[#ffff]'>Building stellar websites for early startups</h1>
            <p className='text-[#ffff] pt-[24px] pb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className='flex gap-4'>
              <button className='bg-[#FCD980] py-[16px] px-[50px] rounded-[30px]'>View our work</button>
              <button className='text-[#ffff] flex items-center gap-2'>View Pricing<IoIosArrowRoundForward /></button>
            </div>
          </Col>
          <Col lg={6}>
             <Image src={BannerImg}/>
          </Col>
         </Row>
       </Container>
    </section>
  )
}

export default Banner
