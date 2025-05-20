import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="py-10 lg:py-26 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-50">
          <img
            src="/images/story-image.png"
            alt="Story Image"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            className="flex-1 w-full md:w-1/2"
          />
          <div className="flex flex-col py-10 md:py-25 pl-0 md:pl-[77px] gap-2 flex-1">
            <small
              className="text-base leading-[130%] text-[#232857] tracking-[-2%]"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              Our Story
            </small>
            <h2
              className="text-3xl lg:text-[32px] leading-[130%] text-[#232857] tracking-[-2%] font-bold"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              Why We Built Migrately
            </h2>
            <p
              className="text-lg leading-[130%] text-[#232857] tracking-[-2%]"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              The U.S. visa process is complicated—especially for those without
              access to legal experts. <br />
              <br />
              Many applicants face delays or rejections due to misinformation and
              missing documents.<br />
              <br />
              <b>That’s why we created Migrately.</b>
              <br />
              <br />
              With AI-powered guidance, we help people—especially in Pakistan—
              understand visa requirements instantly, so they can move forward
              with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img
          src="/images/grid-lines.svg"
          className="w-full h-full object-cover"
          alt="Grid Lines"
        />
      </div>
    </section>
  );
};

export default OurStory;
