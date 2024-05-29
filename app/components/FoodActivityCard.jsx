import React from 'react';

const FoodActivityCard = () => {
  return (
    <div className="xl:max-w-[704px] w-full h-auto shadow-lg mb-10 rounded flex flex-col gap-6 px-6 py-2 bg-white">

      <div className="flex-shrink-0 w-full h-6 flex justify-between items-center">
        <img src="/img/foodActivity.png" id="0:464" className="flex-shrink-0 w-6 h-6 me-2 "/>
        <div className="flex-shrink-0 flex-grow text-gray-700 font-semibold text-xl leading-6 tracking-wider">
          Food Activity
        </div>
        <img src="/img/send.png" id="0:472" className="flex-shrink-0 w-6 h-6"></img>
      </div>

      <div className="flex-shrink-0 w-full flex flex-col justify-start items-center gap-6">
        <div className="flex-shrink-0 self-stretch w-full flex flex-wrap xl:justify-center items-start gap-3">
          <div className="flex-shrink-0 self-stretch max-w-[214.67px] w-full h-[83px] rounded-lg flex justify-start items-center gap-4 p-4 bg-opacity-5 bg-teal-500 border border-teal-500">
            <img src="/img/breakfast-bg.png" className="flex-shrink-0 w-12 h-12"></img>
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="flex-shrink-0 self-stretch w-full h-7 text-black font-medium text-lg leading-6">
                Breakfast
              </div>
              <div className="flex-shrink-0 w-12 h-5 text-neutral-700 whitespace-nowrap font-normal tracking-normal">
                176 cal
              </div>
            </div>
          </div>
          <div className="flex-grow max-w-[208.67px] w-full h-[83px] rounded-lg flex justify-start items-center gap-4 bg-neutral-50">
            <img src="/img/lunch-bg.png" id="0:516" className="flex-shrink-0 w-12 h-12"></img>
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="flex-shrink-0 self-stretch w-full h-7 text-black font-medium text-lg leading-6">
                Lunch
              </div>
              <div className="flex-shrink-0 w-12 h-5 text-neutral-700 whitespace-nowrap font-normal text-base tracking-normal">
                176 cal
              </div>
            </div>
          </div>
          <div className="flex-grow max-w-[208.67px] w-full h-[83px] rounded-lg flex justify-start items-center gap-4 p-4 bg-neutral-50">
            <img src="/img/dinner-bg.png" id="0:542" className="flex-shrink-0 w-12 h-12"></img>
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="flex-shrink-0 self-stretch w-full h-7 text-black font-medium text-lg leading-6">
                Dinner
              </div>
              <div className="flex-shrink-0 w-12 h-5 text-neutral-700 whitespace-nowrap font-normal text-base leading-5 tracking-normal">
                176 cal
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 self-stretch w-full flex flex-col justify-start items-start">
          <div className="flex-shrink-0 self-stretch w-full h-[75px] flex justify-start items-center border-b border-neutral-200">
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="flex-shrink-0 self-stretch w-full h-7 text-black font-medium text-sm">
                Bacon
              </div>
              <div className="flex-shrink-0 self-stretch w-full h-5 text-neutral-700 font-normal text-base tracking-normal">
                3 pcs
              </div>
            </div>
            <div className="flex-shrink-0 w-12 h-5 text-neutral-700 whitespace-nowrap font-medium text-base tracking-normal">
              180 cal
            </div>
          </div>

          <div className="flex-shrink-0 w-full h-[75px] flex justify-start items-center">
            <div className="flex-grow w-full h-[51px] flex flex-col justify-center items-start">
              <div className="flex-shrink-0 self-stretch w-full h-7 text-black font-medium text-sm">
                Eggs Large
              </div>
              <div className="flex-shrink-0 self-stretch w-full h-5 text-neutral-700 font-normal text-base leading-5 tracking-normal">
                3 Whole Eggs
              </div>
            </div>
            <div className="flex-shrink-0 w-12 h-5 text-neutral-700 whitespace-nowrap font-medium text-base tracking-normal">
              210 cal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodActivityCard;
