import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "./Image";
import MsgImg from '../assets/msg.png'

const Msg = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <Row className="fromhmain g-0">
          <Col lg={6}>
            <div className="fromhoveranim">
              <Image src={MsgImg} />
              <div className="py-[96px] pl-[96px] bg-[#1c1e537e] fromhovertext">
                <h3 className="font-poppins text-white text-[54px] pb-[24px] font-semibold w-[480px] leading-[75px]">
                  Building stellar websites for early startups
                </h3>
                <p className="font-poppins text-[16px] text-white font-medium w-[460px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </div>
          </Col>

          <Col className="z-10" lg={6}>
            <div className="bg-[#1C1E53] pt-[96px] pl-[96px] pr[96px]">
              <h3 className="font-poppins text-[32px] pb-[16px] font-medium text-white">
                Send inquiry
              </h3>
              <p className="text-white font-manrope text-[16px] pb-[20px] font-medium leading-[28px] w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>

              <div className="w-[415px]">
                <Form>
                  <input
                    className="py-[18px] mb-[16px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="py-[18px] mb-[16px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="py-[18px] mb-[39px] w-full bg-transparent border-1 text-[16px] rounded-[4px] font-poppins pl-[32px] border-[#ffffff3b]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <div>
                    <button className="bg-[#FCD980] mb-[28px] w-full py-[23px] text-[18px] font-semibold font-manrope rounded-[41px]">
                      Send an Inquiry
                    </button>
                    <button className=" text-[white] w-full pb-[48px]  text-[18px] font-semibold font-poppins">
                      Send an Inquiry
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Msg;
