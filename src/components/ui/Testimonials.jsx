import React from "react"
import CommonHeading from "../common/CommonHeading"
import Feedback from "../common/Feedback"

function Testimonials() {
    const feedbacks = [
        {
            text: "Migrately made my U.S. visa process so much clearer. I knew exactly what documents I needed and which visa to apply for. A game-changer!",
            image: "/images/avatar-1.jpg",
            name: "Ahmed R.",
            location: "Karachi. Pk"
        },
        {
            text: "I spent weeks searching for answers, but Migrately gave me the right visa information in minutes! Highly recommended.",
            image: "/images/avatar-2.jpg",
            name: "Fatima S.",
            location: "Lahore. Pk"
        },
        {
            text: "I love how easy it is to use! The AI chat assistant answered all my questions without any hassle.",
            image: "/images/avatar-3.jpg",
            name: "Usman T.",
            location: "Islamabad. Pk"
        }
    ];
  return (
    <div className="bg-[#F1F3FB] py-[105px] relative">
        <div className="container relative z-50">
            <CommonHeading heading="Testimonials" para="Helping Thousands Move Forward" />
            <div className="grid grid-cols-12 gap-2 mt-10 items-stretch" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                {feedbacks.map((feedback, index) => (
                    <div className="col-span-12 md:col-span-4">
                        <Feedback
                            key={index}
                            feedback={feedback.text}
                            image={feedback.image}
                            name={feedback.name}
                            location={feedback.location}
                        />
                    </div>
                ))}
            </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <img src="/images/grid-lines.svg" className="w-full h-full object-cover" alt="Grid Lines" />
        </div>
    </div>
  )
}

export default Testimonials