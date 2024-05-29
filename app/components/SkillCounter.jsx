import React, { useState } from 'react';

const SkillCounter = ({ name }) => {
  const [value, setValue] = useState(1);

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
      <h6 className="text-white text-center sm:text-left   font-Spectral font-semibold uppercase text-[18px] sm:h-[40px] md:h-[52px] lg:text-[22px] xl:text-[24px] ">
          {name}
        </h6>
        <div className="flex flex-col gap-4 border border-[#A68053] rounded-full w-[50px] h-[50px]  lg:w-[70px] lg:h-[70px] 2xl:w-[86px] 2xl:h-[86px] d-flex justify-center items-center bg-img bg-[url('/img/hotbar-slot.png')] bg-cover relative">
          <div className="absolute w-[30px] h-[30px] md:top-[27px] right-[-15px] rounded-full bg-[#151515] flex items-center justify-center border-2 border-[#A68053]">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4836 11.1161C13.9132 6.93762 8.32192 6.7123 9.67223 0.639115C9.77225 0.188491 9.30215 -0.159719 8.92206 0.0758347C5.29122 2.26751 2.68062 6.6611 4.87112 12.4168C5.05117 12.8879 4.51104 13.3283 4.12095 13.021C2.31053 11.618 2.12049 9.6004 2.28053 8.15635C2.34054 7.6238 1.66038 7.36776 1.37032 7.80814C0.690159 8.87325 0 10.5938 0 13.1849C0.380088 18.9201 5.11118 20.6817 6.81157 20.907C9.24213 21.2245 11.8727 20.7636 13.7632 18.9918C15.8437 17.0152 16.6038 13.8608 15.4836 11.1161ZM6.20143 16.2676C7.64176 15.9091 8.38193 14.844 8.58198 13.9018C8.91206 12.4373 7.62176 11.0035 8.49196 8.68891C8.82204 10.6041 11.7627 11.8023 11.7627 13.8916C11.8427 16.4827 9.1021 18.7051 6.20143 16.2676Z" fill="#D3795D"/>
            </svg>
          </div>
        </div>
        <div className="flex justify-between w-[90px] md:w-[130px]">
            <button className="rounded" onClick={decreaseValue}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='svgHover w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]' >
                <circle cx="16" cy="16" r="15" fill="#151515" stroke="#4C453D" strokeWidth="2"/>
                <path d="M13.7169 16.2458L21.5239 23.9788L18.7859 26.5688L8.49993 16.2828L8.49993 16.2458L18.7859 5.95985L21.4499 8.40185L13.7169 16.2458Z" fill="#4C453D" />
              </svg>
            </button>
            <span className="text-white text-[24px] px-2">{value}</span>
            <button className="rounded" onClick={increaseValue}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='svgHover w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]'>
                <circle cx="16" cy="16" r="15" fill="#151515" stroke="#4C453D"  strokeWidth="2"/>
                <path d="M18.307 16.2542L10.5 8.52115L13.238 5.93115L23.524 16.2172V16.2542L13.238 26.5402L10.574 24.0982L18.307 16.2542Z" fill="#4C453D" />
              </svg>
            </button>
          </div>
      </div>
    </>
  );
};

export default SkillCounter;
