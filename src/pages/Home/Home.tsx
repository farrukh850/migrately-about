import React from "react";
import Banner from "../../components/ui/Banner";
import OurStory from "../../components/ui/OurStory";
import FounderDesk from "../../components/ui/FounderDesk";
import CoreValues from "../../components/ui/CoreValues";
import CTA from "../../components/ui/CTA";
import useAOS from "../../hooks/useAOS";

const Home: React.FC = () => {
  useAOS();
  return (
    <div className="">
      <Banner />
      <OurStory />
      <FounderDesk />
      <CoreValues />
      <CTA />
    </div>
  );
};

export default Home;