import React from "react"

function Feedback( { feedback, image, name, location } ) {
  return (
    <div className="bg-white border border-[#E6E6E6] rounded-xl pt-15 pb-7.5 px-10.5 h-full">
        <p className="text-base leading-[130%] tracking-[-2%] text-[#484E86] lg:min-h-[83px]">"{feedback}"</p>
        <div className="flex items-center gap-4 mt-10">
            <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src={image} className="w-full h-full object-cover" alt="Avatar" />
            </div>
            <div className="flex flex-col">
                <h5 className="text-lg leading-[130%] tracking-[-3.5%] text-[#484E86] font-bold">{name}</h5>
                <p className="text-base leading-[130%] tracking-[-3.5%] text-[#484E86]">{location}</p>
            </div>
        </div>
    </div>
  )
}

export default Feedback