import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FuLast = () => {
  return (
    <section className="py-[128px]">
      <Container>
        <Row>
          <Col lg={3}>
            <h3 className="font-poppins text-[38px] font-semibold leading-[56px] pb-[16px] ">
              Frequently asked question
            </h3>
            <p className="text-[#2405F2]">
              Contact us for more info
            </p>
          </Col>

          <Col lg={{ span: 8, offset: 1 }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="border-0 pb-[20px]" eventKey="0">
                <Accordion.Header>
                  <span className="pr-[60px] text-[#2405F2]">01</span>How much time does it
                  take ?
                </Accordion.Header>
                <Accordion.Body className="accordion-pad w-[580px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Accordion.Body>
              </Accordion.Item>

               <Accordion.Item className="border-0 pb-[20px]" eventKey="1">
                <Accordion.Header>
                  <span className="pr-[60px] text-[#2405F2]">02</span>What is your class naming convention ?
                </Accordion.Header>
                <Accordion.Body className="accordion-pad w-[580px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item className="border-0 pb-[20px]" eventKey="3">
                <Accordion.Header>
                  <span className="pr-[60px] text-[#2405F2]">03</span>How do we communicate ?
                </Accordion.Header>
                <Accordion.Body className="accordion-pad w-[580px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item className="border-0 pb-[20px]" eventKey="4">
                <Accordion.Header>
                  <span className="pr-[60px] text-[#2405F2]">04</span>I have a bigger project. Can you handel it ?
                </Accordion.Header>
                <Accordion.Body className="accordion-pad w-[580px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item className="border-0 pb-[20px]" eventKey="5">
                <Accordion.Header>
                  <span className="pr-[60px] text-[#2405F2]">05</span>What is your class naming convention ?
                </Accordion.Header>
                <Accordion.Body className="accordion-pad w-[580px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FuLast;
