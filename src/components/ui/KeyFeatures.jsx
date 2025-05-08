import React from "react"
import CommonHeading from "../common/CommonHeading"
import FeatureCard from "../common/FeatureCard"

function KeyFeatures() {
    const features = [
        {
            heading: "AI Immigration Assistant",
            para: "Chat with Migrately to confirm eligibility, get instant answers, and map out your next steps.",
            image: "/images/feature-icon1.gif"
        },
        {
            heading: "Document Organization Hub",
            para: "Upload awards, publications, and more into lawyer-approved categories—everything stored in one place.",
            image: "/images/feature-icon2.gif"
        },
        {
            heading: "AI Guided Recommendation Letters",
            para: "Enter a referrer's details; Migrately drafts a persuasive letter and routes it to your lawyer for quick sign-off.",
            image: "/images/feature-icon3.gif"
        },
        {
            heading: "Auto-Filled USCIS Forms",
            para: "Your profile data flows straight into forms like I-129 – no repetitive typing.",
            image: "/images/feature-icon4.gif"
        },
        {
            heading: "Lawyer Connect & Review",
            para: "Share your workspace with vetted attorneys who polish your case and file on your behalf.",
            image: "/images/feature-icon5.gif"
        },
        {
            heading: "Privacy & Security",
            para: "Your personal data is encrypted and never shared, ensuring a safe consultation.",
            image: "/images/feature-icon6.gif"
        }
    ];
  return (
    <div className="py-21.5 bg-[#F1F3FB]">
        <div className="container">
            <CommonHeading heading="Key Features" para="Smart, Simple, and Accurate" />
            <div className="grid grid-cols-12 gap-2 mt-10 items-stretch" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                {features.map((feature, index) => (
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <FeatureCard
                            key={index}
                            heading={feature.heading}
                            para={feature.para}
                            image={feature.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures