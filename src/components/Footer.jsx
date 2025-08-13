import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterLogo from "../assets/Logo.png";
import Image from "./Image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CopyRight  from '../components/Copyright'

const Footer = () => {
  return (
    <>
    <section className="bg-[#1C1E53]">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="pt-[96px]">
              <Image src={FooterLogo} />
              <p className="text-[#ffffffa5] pt-[23px] font-poppins w-[430px]">
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>

            <div className="bg-[#FCD980] flex gap-[39px] mt-[105px]">
                <div className="pl-[37px] pt-[18px]">
                    <h3 className='font-poppins text-[18px] pb-[1px]'>Email me at</h3>
                    <p className='font-[16px] font-poppins'>contact@website.com</p>
                </div>
                <div className="pt-[18px]">
                    <h3 className='font-poppins text-[18px]'>Call us</h3>
                    <p className='font-poppins'>0927 6277 28525</p>

                </div>

            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <div className="pt-[96px]">
              <h3 className="font-poppins text-[48px] text-white pb-[14px]  font-medium">
                Lets Talk!
              </h3>
              <p className="text-[#ffffffa5] pb-[20px]  font-poppins">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="flex text-white gap-[26px] ">
                <FaLinkedin />
                <FaFacebook />
                <FaInstagramSquare />
                <FaTwitter />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
     <CopyRight/>
    </>
  );
};

export default Footer;
