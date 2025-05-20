import React from "react";

const CoreValues: React.FC = () => {
  return (
    <section className="py-10 lg:py-27">
      <div className="container">
        <div className="flex flex-col gap-2">
          <small
            className="text-base leading-[130%] text-[#232857] tracking-[-2%]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            Core Values
          </small>
          <h2
            className="text-3xl lg:text-[32px] leading-[130%] text-[#232857] tracking-[-2%] font-bold"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
          >
            What Drives Us at Migrately
          </h2>
        </div>
        <div className="grid grid-cols-12 items-stretch mt-13 gap-2.5">
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Innovation
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              We use cutting-edge AI to simplify complex visa processes.
            </p>
          </div>
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Accuracy
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              Providing up-to-date and reliable visa information.
            </p>
          </div>
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Accessibility
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              Making immigration knowledge available to everyone, everywhere.
            </p>
          </div>
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Trust & Transparency
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              Clear, honest, and user-focused guidance—always
            </p>
          </div>
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Empowerment
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              Giving individuals the knowledge to take control of their visa journey.
            </p>
          </div>
          <div
            className="flex col-span-12 md:col-span-6 lg:col-span-4 flex-col py-13 px-10.5 gap-2.5 border border-[#DFE2FF] rounded-xl"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="500"
          >
            <h6 className="text-lg font-bold leading-[100%] text-[#232857] tracking-[-7%]">
              Personalization
            </h6>
            <p className="text-base leading-[130%] text-[#232857] tracking-[-2%]">
              Delivering tailored guidance and recommendations based on your unique
              background and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
