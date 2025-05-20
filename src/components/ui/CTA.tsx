import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="py-10 lg:py-19 bg-[#0E33C0] relative">
      <div className="container">
        <div className="flex justify-center flex-col lg:flex-row items-center gap-5 lg:gap-0">
          <div className="flex flex-col gap-5 lg:gap-8 items-center justify-center text-center">
            <h5
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              className="text-2xl lg:text-[48px] tracking-[-2%] leading-[130%] text-white font-semibold"
            >
              Start Your U.S. Visa <br /> Journey Today
            </h5>
            <a
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
              href="#"
              className="w-[204px] h-[62px] bg-white flex items-center justify-center rounded-lg text-xl leading-[150%] tracking-[-0.4px] text-[#0E33C0]"
            >
              Free Sign Up
            </a>
            <div className="flex items-center gap-5">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                className="flex items-center gap-2"
              >
                <img src="/images/check-white.svg" alt="White Check" />
                <p className="text-sm text-white leading-[150%]">Free 14 day trial</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="500"
                className="flex items-center gap-2"
              >
                <img src="/images/check-white.svg" alt="White Check" />
                <p className="text-sm text-white leading-[150%]">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 top-0"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <img src="/images/migrately-icon.svg" alt="Migrately Icon" />
      </div>
    </div>
  );
};

export default CTA;
