import { Link } from "react-router-dom";
import "../../../src/assets/css/main.css";

const Footer = () => {
  return (
    <div className="pt-7">
      <div className="container">
        <div className="grid grid-cols-12 items-start justify-between">
          <div className="col-span-12 lg:col-span-8 mb-5 lg:mb-0">
           <div className="max-w-full lg:max-w-[487px]">
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="text-base font-semibold leading-[130%] text-[#484E86] tracking-[-0.32px] mb-4.5 w-full lg:w-[60%]">Join our newsletter to stay on top of the latest advancements in AI immigration technology.</p>
              <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" className="relative">
                <input type="text" className="h-12 border border-[rgba(140,140,140,0.20)] bg-[rgba(250,249,255,0.08)] rounded-lg w-full text-sm leading-[#8E8E8E] text-[#8E8E8E] pl-14" placeholder="Your work Email" />
                <img src="/images/envelope.svg" className="absolute top-1/2 -translate-y-1/2 left-5" alt="" />
                <input type="submit" className="rounded-[5px] bg-[#0E33C0] w-[138px] h-10.5 text-base leading-[150%] tracking-[-0.32px] absolute top-1/2 -translate-y-1/2 right-1 text-white cursor-pointer" />
           </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-6 lg:col-span-2">
            <h6 className="text-xl text-[#484E86] mb-6">Product</h6>
            <ul className="flex flex-col gap-3.5">
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">For Individuals</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">For Law Firms</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">API & Embeds</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Document Management</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="500" className="col-span-6 lg:col-span-2">
            <h6 className="text-xl text-[#484E86] mb-6">Company</h6>
            <ul className="flex flex-col gap-3.5">
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">About us</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Careers</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Blog</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Contact Us</a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Help centre </a></li>
              <li><a href="#" className="text-sm leading-[150%] text-[#484E86]">Security</a></li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className="flex items-center justify-between mt-[77px]">
          <a href="#"><h4 className="text-2xl font-bold bg-gradient-to-r from-[#111111] to-[#0E33C0] bg-clip-text text-transparent">Migrately</h4></a>
          <ul className="flex items-center gap-3.5">
            <li><a href="#" className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#484E86]/10 hover:border-[#484E86]"><img src="/images/linkedin.svg" alt="Linkedin" /></a></li>
            <li><a href="#" className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#484E86]/10 hover:border-[#484E86]"><img src="/images/facebook.svg" alt="Facebook" /></a></li>
            <li><a href="#" className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#484E86]/10 hover:border-[#484E86]"><img src="/images/x.svg" alt="X" /></a></li>
            <li><a href="#" className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#484E86]/10 hover:border-[#484E86]"><img src="/images/insta.svg" alt="Instagram" /></a></li>
          </ul>
        </div>
        <hr className="my-7.5 border-[#484E86]" />
        <div className="flex flex-col lg:flex-row items-center gap-3 max-w-full lg:max-w-[80%] mx-auto pb-10">
          <small className="text-sm text-[#484E86] text-center lg:text-start block">MIGRATELY ® is a registered trademark of Remotebase Inc.</small>
          <small className="hidden lg:block text-[#A0A0A0]">|</small>
          <ul className="flex items-center gap-2 lg:gap-10">
            <li><a href="#" className="text-[11px] lg:text-sm text-[#484E86]">Privacy Policy</a></li>
            <li><a href="#" className="text-[11px] lg:text-sm text-[#484E86]">Terms & Conditions </a></li>
            <li><a href="#" className="text-[11px] lg:text-sm text-[#484E86]">Copyright policy</a></li>
            <li><a href="#" className="text-[11px] lg:text-sm text-[#484E86]">Frequently asked questions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;