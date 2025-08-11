import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from './Image'
import { IoIosArrowRoundForward } from "react-icons/io";
import Homecard from '../components/Homecard'
import HomeImg1 from '../assets/Home1.png'
import HomeImg2 from '../assets/Home2.png'
import HomeImg3 from '../assets/Home3.png'
import HomeImg4 from '../assets/Home4.png'

const HomePart = () => {
  return (
    <section className='bg-[#F4F6FC] py-[128px]'>
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              <h2 className='text-[64px] pb-[16px]'>How we work</h2>
              <p className='text-[16px] pb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <button className='text-[18px] text-[#2405F2] flex items-center'>Get in touch with us<IoIosArrowRoundForward /></button>
             </div>
          </Col>
          <Col lg={{span:6, offset:1}}>
            <div className='flex flex-wrap gap-x-4'>
               <Homecard src={HomeImg1} title="Strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
               <Homecard src={HomeImg2} title="Strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
               <Homecard src={HomeImg3} title="Strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
               <Homecard src={HomeImg4} title="Strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
             </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomePart