import React from "react";

const FounderDesk: React.FC = () => {
  return (
    <section className="py-10 lg:pt-32 lg:pb-16 bg-[#F1F3FB]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-25">
          <div className="flex-1 md:w-1/2">
            <div className="lg:max-w-[498px] flex flex-col gap-2.5">
              <h2
                className="text-3xl lg:text-[40px] leading-[130%] tracking-[-2%] text-[#232857] font-bold"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                From the Founder’s Desk
              </h2>
              <p
                className="text-lg leading-[130%] tracking-[-2%] text-[#232857]"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
              >
                Not so long ago, I walked in your shoes—navigating endless forms,
                facing rejections, and learning by trial and error until I secured
                two O‑1 visas and, finally, an EB‑1A green card to move to the U.S.
                <br />
                <br />
                That journey taught me how critical it is to choose the right path,
                prepare flawless documentation, and avoid wasted time.
              </p>
              <b
                className="text-lg leading-[130%] tracking-[-2%] text-[#232857] font-bold my-4 block"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                That’s why I built Migrately: an AI‑powered guide shaped by my own
                experience, so you can
              </b>
              <ul className="flex flex-col gap-1.5 list-disc pl-10 mb-5">
                <li
                  className="text-lg leading-[130%] tracking-[-2%] text-[#232857]"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-duration="500"
                >
                  Instantly pinpoint the best visa option
                </li>
                <li
                  className="text-lg leading-[130%] tracking-[-2%] text-[#232857]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                >
                  Follow a proven, step‑by‑step application roadmap
                </li>
                <li
                  className="text-lg leading-[130%] tracking-[-2%] text-[#232857]"
                  data-aos="fade-up"
                  data-aos-delay="350"
                  data-aos-duration="500"
                >
                  Sidestep the errors that nearly derailed my process
                </li>
              </ul>
              <p
                className="text-lg leading-[130%] tracking-[-2%] text-[#232857]"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                Consider this the shortcut I wished I’d had—bringing clarity and
                confidence to your U.S. visa journey.
              </p>
              <span
                className="text-lg leading-[130%] tracking-[-2%] text-[#232857] mt-4"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
              >
                --------------------------------------------
              </span>
              <p
                className="text-lg leading-[130%] tracking-[-2%] text-[#232857] md:block hidden"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                -<b>&nbsp;&nbsp; Qasim Asad Salam.</b> CEO, Migrately
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
            src="/images/founder-img.png"
            alt="Founder Image"
            className="flex-1 w-full grayscale-100"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          />
          <p
            className="text-lg leading-[130%] tracking-[-2%] text-[#232857] mt-3 block md:hidden"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            -<b>&nbsp;&nbsp; Qasim Asad Salam.</b> CEO, Migrately
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDesk;
