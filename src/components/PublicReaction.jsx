import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Anti from "../assets/anti.png";
import Image from "../components/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PublicReaction = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='py-[128px]'>
      <Container>
        <Row>
          <Col lg={4}>
            <h3 className='text-[38px] font-poppins font-semibold pb-[16px] w-[350px]'>
              What our clients say about us
            </h3>
            <p className='text-[16px] font-poppins font-medium w-[400px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </Col>
          <Col lg={8}>
            <Slider {...settings}>
              <div>
                <h3 className='font-poppins text-[32px] font-medium '>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h3>
                <div className='pt-[38px] flex items-center gap-[14px]'>
                  <Image src={Anti} />
                  <div>
                    <h3 className='text-[18px] font-poppins font-medium pb-[3px]'>
                      Jenny Wilson
                    </h3>
                    <p className='text-[12px] font-poppins font-medium'>
                      Vice President
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='font-poppins text-[32px] font-medium '>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h3>
                <div className='pt-[38px] flex items-center gap-[14px]'>
                  <Image src={Anti} />
                  <div>
                    <h3 className='text-[18px] font-poppins font-medium pb-[3px]'>
                      Jenny Wilson
                    </h3>
                    <p className='text-[12px] font-poppins font-medium'>
                      Vice President
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PublicReaction;
