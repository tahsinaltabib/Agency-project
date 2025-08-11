import React from "react";
import { Card } from 'react-bootstrap';

const Fucard = ({ src,CardTitle,cardtext,bgcolor}) => {
  return (
    <Card className={`"border-0 pl-[48px] py-[50px] !bg-[#F4F6FC]" ${bgcolor}`} style={{ width: "405px" }}>
      <img className="w-[32px]" src={src} />
      <Card.Body className="p-0">
        <Card.Title className="pt-[26px] pb-[12px] font-poppins">{CardTitle}</Card.Title>
        <Card.Text className="font-poppins w-[340px]">{cardtext}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Fucard;
