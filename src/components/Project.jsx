import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import Hov1 from '../assets/Hov1.png'
import Hov2 from '../assets/Hov2.png'
import Hov3 from '../assets/Hov3.png'
import Image from '../components/Image'


const HomeProject = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-[48px] font-poppins font-semibold pb-[64px]">
            View our projects
          </h2>
          <button className="flex gap-[7px] items-center">
            View More <FaArrowRightLong />{" "}
          </button>
        </div>

        <Row>
          <Col lg={8}>
            <div className="hovermain">
              <Image src={Hov1}/>
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg">
                <h2 className="text-[white] pb-[16px] font-poppins text-[24px] pt-[312px] pl-[48px] pr-[35px]">
                  Workhub office Webflow Webflow Design
                </h2>
                <p className="text-[#ffffffce] pl-[48px] pr-[35px] font-poppins">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="hovermain pb-[32px]">
              <Image src={Hov2}/>
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg"></div>
            </div>

            <div className="hovermain">
              <Image src={Hov3}/>
              <div className="bg-gradient-to-br from-[#1c1e5334] to-[#1c1e53] hoverimg"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeProject;