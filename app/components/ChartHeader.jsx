import React from 'react'

const ChartHeader = ({title, stats, timespan, value, img}) => {
  return (
    <div className="h-[97px] flex justify-start items-start gap-x-[10px] gap-y-0 ">
      <div className="flex-grow  h-[97px] flex flex-col justify-start items-start gap-y-[12px] gap-x-[12px]">
        <div className="flex-shrink-0  h-[25px] flex justify-start items-center gap-x-[12px] gap-y-0">
          <img src={img} id="0:650" className="flex-shrink-0 w-[22px] h-[23px]"></img>
          <div className="flex-shrink-0 w-[65px] h-[25px] text-gray-700 font-inter font-semibold text-[20px] leading-[24px] tracking-[0.9px] whitespace-nowrap">
           {title}
          </div>
        </div>
        <div className="flex-shrink-0 w-full h-[60px] flex flex-col justify-center items-start gap-y-[3px] gap-x-[3px]">
          <div className="flex-shrink-0 w-[146.28px] h-[38px] text-gray-900 font-inter font-semibold text-[32px] leading-[38.4px]">
           {stats}
          </div>
          <div className="flex-shrink-0 w-[254.85px] h-[22px] text-gray-700 font-inter font-normal text-[14px] leading-[19.6px]">
            <div>
              <span>{timespan} </span><span className="text-red-700">{value}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-[141px] h-[37px] rounded-[8px] flex justify-start items-center gap-x-[6px] gap-y-0 p-[8px_12px] overflow-hidden bg-gray-100 cursor-pointer">
        <div className="flex-shrink-0 w-[95px] h-[21px] text-gray-500 font-inter font-medium text-[14px] leading-[21px] whitespace-nowrap">
          Last 6 Months
        </div>
        <img src='/img/arrow-down.png' id="0:669" className="flex-shrink-0 w-[16px] h-[17px]"></img>
      </div>
    </div>
  )
}

export default ChartHeader
