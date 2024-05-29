import React from 'react'

const BoostsCard = ({title, duration, img}) => {
  return (
    <div className="h-128 rounded-lg flex justify-start items-center gap-x-0 overflow-hidden bg-white cursor-pointer">
      <div className="flex-shrink-0 w-128 h-128 overflow-hidden bg-purple-200">
        <img src={img} className=" w-128 h-128 hover:opacity-90" />
      </div>
      <div className="flex-grow self-stretch w-336 h-128 flex flex-col justify-start items-center p-4">
        <div className="flex-shrink-0 w-full h-87 flex flex-col justify-start items-start ">
          <div className="flex-shrink-0 w-full h-54 text-neutral-900 font-inter font-semibold text-base leading-7">
            {title}
          </div>
          <div className="flex-shrink-0 w-full h-21 flex justify-start items-center gap-1">
            <img src='/img/clock.png' id="0:871" className="flex-shrink-0 w-4 h-4"></img>
            <div className="flex-shrink-0 w-68 h-21 text-neutral-700 whitespace-nowrap font-inter font-normal text-base leading-6">
              {duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoostsCard
