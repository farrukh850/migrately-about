import React from "react"

function FeatureCard( {heading, para, image} ) {
  return (
    <div className="rounded-xl bg-white border border-[#E6E6E6] py-13 px-12 h-full shadow-[0px_30.5px_40.37px_18.84px_rgba(62,82,198,0.07)]">
        <h3 className="font-bold text-[#484E86] text-lg tracking-[-7%] mb-2.5">{heading}</h3>          
        <p className="text-[#484E86] text-base tracking-[-2%] mb-10 lg:min-h-[72px]">{para}</p> 
        <img src={image} className="w-11" alt="Feature Icon" />
    </div>
  )
}

export default FeatureCard