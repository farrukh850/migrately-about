import React from 'react'

function CommonHeading({ heading, para }) {
  return (
    <div className="max-w-[544px]">
        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="text-2xl lg:text-[32px] leading-[130%] tracking-[-2%] font-extrabold text-[#232857] mb-2">{heading}</h1>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="text-base leading-[130%] tracking-[-2%] text-[#484E86]">{para}</p>
    </div>
  )
}

export default CommonHeading