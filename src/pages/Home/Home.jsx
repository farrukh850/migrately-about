import { Link } from "react-router-dom"
import Banner from "../../components/ui/Banner";
import SimplifyJourney from "../../components/ui/SimplifyJourney";
import KeyFeatures from "../../components/ui/KeyFeatures";
import HowItWorks from "../../components/ui/HowItWorks";
import Testimonials from "../../components/ui/Testimonials";
import CTA from "../../components/ui/CTA";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <SimplifyJourney />
      <KeyFeatures />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;