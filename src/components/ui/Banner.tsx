import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative mt-24 lg:mt-0">
      <div className="h-[500px] md:h-[350px] lg:h-[683px] relative z-100 px-5 lg:px-0">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-0 h-full">
          <div className="flex flex-col items-start justify-start md:justify-center flex-1 h-[500px] md:h-[350px] lg:h-[683px]">
            <div className="max-w-[400px] lg:max-w-[550px]">
              <h1 
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                className="text-3xl lg:text-5xl leading-[130%] tracking-[-2%] text-[#232857] mb-2 font-black"
              >
                Your Trusted AI<br />
                Immigration Assistant
              </h1>  
              <p 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                className="text-lg leading-[130%] tracking-[-2%] text-[#484E86]"
              >
                Helping you navigate the U.S. visa process—fast, easy, and stress-free.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] lg:h-[602px] absolute bottom-0 right-0">
            <img 
              src="/images/about-banner.svg" 
              alt="About banner" 
              className="z-50 relative w-full h-full object-contain object-right" 
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[20%] lg:w-[700px] lg:h-[700px] z-1 lg:z-50">
        <img 
          src="/images/glow-1.svg" 
          className="object-cover" 
          alt="Glow" 
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full lg:w-[600px] lg:h-[600px] z-1 lg:z-50">
        <img 
          src="/images/glow-2.svg" 
          className="w-full h-full object-cover" 
          alt="Glow" 
        />
      </div>
    </div>
  );
};

export default Banner;