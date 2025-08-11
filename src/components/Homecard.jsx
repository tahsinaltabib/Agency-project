import React from 'react'

const Homecard = ({src,title,pera}) => {
  return (
    <div className='pb-[45px]'>
        <img src={src}/>
        <h2 className='pt-[16px] pb-[6px] font-poppins text-[32px] font-medium'>{title}</h2>
        <p className='font-poppins w-[296px]'>{pera}</p>
    </div>
  )
}

export default Homecard