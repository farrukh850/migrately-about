import React from "react"
import { Link } from "react-router-dom"
import CommonHeading from "../common/CommonHeading"
function HowItWorks() {
  return (
    <div className="py-10 lg:py-[117px] relative bg-white">
        <div className="container relative z-50 bg-white">
            <CommonHeading heading={<>{'How Migrately Works'}<br />{'(Simple & Hassle-Free)'}</>} para="Get Your Visa Guidance in 3 Easy Steps" />
            <div className="grid grid-cols-12 items-stretch bg-white border border-[#EBEFFF] min-h-auto lg:min-h-[306px] mt-8.5 mb-5 rounded-xl overflow-hidden">
              <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6 relative">
                <div className="max-w-full lg:max-w-[343px] flex flex-col gap-2 lg:absolute lg:left-[77px] lg:top-1/2 lg:-translate-y-1/2 p-10 lg:p-0">
                  <h4 className="text-lg font-medium text-[#232857] leading-[140%] tracking-[-2%]">Step 1</h4>
                  <h5 className="text-xl font-bold text-[#232857] leading-[140%] tracking-[-2%]">Start a Chat</h5>
                  <p className="text-base text-[#484E86] leading-[130%] tracking-[-2%]">Click “Chat with Migrately” and tell our AI about your immigration goals.</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="500" className="col-span-12 md:col-span-6 bg-[#EEF0FA]">
                <div className="flex flex-col gap-7.5 py-10 px-7.5">
                  <img src="/images/step-one-img1.svg" className="w-[251px] self-end" alt="Chat" />
                  <img src="/images/step-one-img2.svg" className="w-[338px]" alt="Chat" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 items-stretch bg-white border border-[#EBEFFF] min-h-auto lg:min-h-[306px] mb-5 rounded-xl overflow-hidden">
              <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6 relative">
                <div className="max-w-full lg:max-w-[343px] flex flex-col gap-2 lg:absolute lg:left-[77px] lg:top-1/2 lg:-translate-y-1/2 p-10 lg:p-0">
                  <h4 className="text-lg font-medium text-[#232857] leading-[140%] tracking-[-2%]">Step 2</h4>
                  <h5 className="text-xl font-bold text-[#232857] leading-[140%] tracking-[-2%]">Get Personalized Recommendations</h5>
                  <p className="text-base text-[#484E86] leading-[130%] tracking-[-2%]">Migrately will analyze your situation and suggest the right visa type, along with step-by-step guidance.</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="500" className="col-span-12 md:col-span-6 bg-[#EEF0FA]">
                <div className="flex flex-col gap-7.5 py-10 px-7.5">
                  <img src="/images/step-two-img.svg" className="" alt="Chat" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 items-stretch bg-white border border-[#EBEFFF] min-h-auto lg:min-h-[306px] mb-5 rounded-xl overflow-hidden">
              <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6 relative">
                <div className="max-w-full lg:max-w-[343px] flex flex-col gap-2 lg:absolute lg:left-[77px] lg:top-1/2 lg:-translate-y-1/2 p-10 lg:p-0">
                  <h4 className="text-lg font-medium text-[#232857] leading-[140%] tracking-[-2%]">Step 3</h4>
                  <h5 className="text-xl font-bold text-[#232857] leading-[140%] tracking-[-2%]">Follow Your Action Plan</h5>
                  <p className="text-base text-[#484E86] leading-[130%] tracking-[-2%]">Receive a clear document checklist, application tips, and real-time updates to move forward confidently.</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6 bg-[#EEF0FA]">
                <div className="flex flex-col gap-7.5 py-10 px-7.5">
                  <img src="/images/step-three-img.svg" className="" alt="Chat" />
                </div>
              </div>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <img src="/images/grid-lines.svg" className="w-full h-full object-cover" alt="Grid Lines" />
        </div>
    </div>
  )
}

export default HowItWorks