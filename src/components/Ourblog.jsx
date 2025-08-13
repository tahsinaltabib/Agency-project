import React from 'react'
import BlogImg from '../assets/blog1.png'
import { Container } from 'react-bootstrap';
import BlogCard from '../components/BlogCard'



const Ourblog = () => {
  return (
    <section className='py-[128px]'>
        <Container>
            <h3 className="font-poppins text-[48px] font-semibold">
          Our Blog
        </h3>

        <div className="flex flex-wrap gap-[40px] gap-y-[64px] pt-[48px]">
          <BlogCard
            src={BlogImg}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={BlogImg}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
          <BlogCard
            src={BlogImg}
            btntext="Read More"
            cardtext="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
            date="27 Jan 2021"
            CardTitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
          />
 
        </div>

        </Container>
    </section>
  )
}

export default Ourblog