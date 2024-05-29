import React from 'react';

const MacrosCard = () => {
  return (
    <div className="max-w-[740px] w-full h-auto shadow-lg mb-10 rounded flex flex-col gap-6 px-6 py-2 bg-white">
      <div className="flex-shrink-0 h-6 flex justify-between items-center">
        <img src="/img/macro.png" id="0:574" className="flex-shrink-0 w-[22px] h-[23px] me-2"></img>
        <div className="flex-shrink-0 flex-grow text-gray-700 font-semibold text-2xl leading-6 tracking-wide">
          Macros
        </div>
        <img src="/img/send.png" id="0:577" className="flex-shrink-0 w-6 h-6"></img>
      </div>
      <div className="flex-shrink-0 h-[225px] flex gap-3">
        <div className="flex-shrink-0 max-w-[198px] w-full h-[198px] flex justify-center items-start gap-6">
          <div className="relative w-[198px] h-[198px]">
            <div className="absolute top-[60.2px] left-[32.44px] w-[91.99px] h-[72.72px] flex flex-col justify-start items-center gap-1">
              <div className="text-gray-900 text-[28px] font-medium">
                1,345
              </div>
              <div className="text-neutral-600 text-[14px] font-normal">
                Calories
              </div>
            </div>
            <div>
              <img src="/img/macro-ellips-lg.png" id="0:596" className="absolute top-[-0.58px] left-0 w-[160px] h-[169px]"></img>
              <img src="/img/macro-ellips-lg-bg.png" id="0:596" className="absolute top-[-0.58px] left-0 w-[160px] h-[169px]"></img>
            </div>
          </div>
        </div>
        <div className="flex-grow w-full h-[225px] flex flex-col justify-start items-start">
          <div className="flex-shrink-0 w-full h-[75px] flex items-center border-b border-gray-300">
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="text-[#1A1D21] text-[18px] leading-[26.64px] font-medium">
                Carbs
              </div>
              <div className="text-neutral-700 text-[16px] leading-[21.44px] font-normal tracking-wide">
                45/107 gm
              </div>
            </div>
            <div className="relative w-[51px] h-[51px]">
              <div className="absolute top-4 left-2.5 w-[30.6px] h-[19.13px] text-[#1A1D21] text-[12px]  text-center">
                46%
              </div>
              <img src="/img/macro-ellips-sm.png" id="0:619" className="absolute top-[-0.58px] left-0 w-[51px] h-[45px]"></img>
              <img src="/img/macro-ellips-sm-bg.png" id="0:620" className="absolute top-[-0.30px] left-0 w-[49px] h-[45px]"></img>
            </div>
          </div>
          <div className="flex-shrink-0 w-full h-[75px] flex items-center border-b border-gray-300">
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="text-[#1A1D21] text-[18px] leading-[26.64px] font-medium">
                Protein
              </div>
              <div className="text-neutral-700 text-[16px] leading-[21.44px] font-normal tracking-wide">
                78/200 gm
              </div>
            </div>
            <div className="relative w-[51px] h-[51px]">
              <div className="absolute top-4 left-2.5 w-[30.6px] h-[19.13px] text-[#1A1D21] text-[12px]  text-center">
                30%
              </div>
              <img src="/img/macro-ellips-sm.png" id="0:619" className="absolute top-[-0.58px] left-0 w-[51px] h-[45px]"></img>
              <img src="/img/macro-ellips-sm-bg.png" id="0:620" className="absolute top-[-0.58px] left-0 w-[51px] h-[45px]"></img>
            </div>
          </div>
          <div className="flex-shrink-0 w-full h-[75px] flex items-center border-b border-gray-300">
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="text-[#1A1D21] text-[18px] leading-[26.64px] font-medium">
                Fat
              </div>
              <div className="text-neutral-700 text-[16px] leading-[21.44px] font-normal tracking-wide">
                34/86 gm
              </div>
            </div>
            <div className="relative w-[51px] h-[51px]">
              <div className="absolute top-4 left-2.5 w-[30.6px] h-[19.13px] text-[#1A1D21] text-[12px]  text-center">
                35%
              </div>
              <img src="/img/macro-ellips-sm.png" id="0:619" className="absolute top-[-0.58px] left-0 w-[51px] h-[45px]"></img>
              <img src="/img/macro-ellips-sm-bg.png" id="0:620" className="absolute top-[-0.58px] left-0 w-[51px] h-[45px]"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacrosCard;
