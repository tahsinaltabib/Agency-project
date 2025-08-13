import React from 'react'
import { Container } from 'react-bootstrap';


const CopyRight = () => {
  return (
    <section className='py-[32px]'>
        <Container>
            <div className='flex justify-between'>
                    <p className='mb-[0px] font-poppins text-[16px] font-medium'>Copyright 2022, Finsweet.com</p>
                <div>
                    <ul className='flex gap-[32px] mb-0'>
                        <li className='font-poppins font-medium' >Home</li>
                        <li className='font-poppins font-medium' >About us</li>
                        <li className='font-poppins font-medium' >Features</li>
                        <li className='font-poppins font-medium' >Pricing</li>
                        <li className='font-poppins font-medium' >FAQ</li>
                        <li className='font-poppins font-medium' >Blog</li>
                    </ul>

                </div>
            </div>

        </Container>
    </section>
  )
}

export default CopyRight