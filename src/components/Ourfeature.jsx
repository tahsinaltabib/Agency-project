import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fucard from '../components/Fucard'
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import Icon4 from '../assets/Icon4.png'
import Icon5 from '../assets/Icon5.png'
import Icon6 from '../assets/Icon6.png'
import Image from '../components/Image';

const HomeDesignC = () => {
  return (
    <section className="py-[128px] bg-[#F4F6FC]">
      <Container>
        <div className="text-center pb-[47px]">
          <p className="font-poppins font-medium pb-[12px]">
            Features
          </p>
          <h2 className="w-[630px] inline-block font-poppins text-[48px] font-semibold">
            Design that solves problems, one product at a time
          </h2>
        </div>
        <Row className="gap-y-[24px]">
          <Col lg={4}>
            <Fucard
              src={Icon1}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
              src={Icon2}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
              src={Icon3}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
          <Col lg={4}>
            <Fucard
           
              src={Icon4}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
                    <Col lg={4}>
            <Fucard
           
              src={Icon5}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
                    <Col lg={4}>
            <Fucard
           
              src={Icon6}
              CardTitle="Uses Client First"
              cardtext="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeDesignC;