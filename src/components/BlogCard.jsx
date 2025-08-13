import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";


const BlogCard = ({src,CardTitle,date,carddetails,cardtext,btntext}) => {
  return (
     <Card style={{ width: '405px' }}>
         <img src={src} alt="" />
      <Card.Body className='p-0 border-none'>
        <p className='pt-[32px] pb-[16] font-poppins'>{date}</p>
        <Card.Title className='font-poppins font-semibold text-[24px] w-[330px] !leading-[36px] '>{CardTitle}</Card.Title>
        <Card.Text>
         {cardtext}
        </Card.Text>
        <p>{carddetails}</p>
        <div className='flex items-center gap-[7px]'>
        <Button className='bg-white p-0  text-black border-0 '>{btntext}</Button>
        <FaArrowRightLong />

        </div>
      </Card.Body>
    </Card>
  )
}

export default BlogCard