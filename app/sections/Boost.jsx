import React from "react";
import BoostsCard from "../components/BoostsCard"
const data = [
  {
    id: 1,
    title: "The Importance of a Balanced Diet: Tips and Tricks",
    duration: "10-15 mins",
    img: "/img/exe-1.png"
  },
  {
    id: 2,
    title: "How to Set SMART Fitness Goals",
    duration: "10-15 mins",
    img: "/img/exe-2.png"
  },
  {
    id: 3,
    title: "Top 5 Exercises to Boost Your Endurance",
    duration: "10-15 mins",
    img: "/img/diet.png"
  },
];
const Boost = () => {
  return (
    <section className="hero-section flex justify-center mt-10 mb-10w-full px-4 max-w-[1440px]">
      <div className=" flex flex-col">
        <div className="flex items-center gap-x-20">
          <div className="flex-grow text-gray-900 font-inter font-semibold text-xl">
           Boost
          </div>
          <div className="flex items-center gap-x-8">
            <div className="text-primary-700 whitespace-nowrap font-cerapro-medium text-xl">
              View All
            </div>
            <img src="/img/arrow-right.png" className="flex-shrink-0 w-4 h-4">
              {/* Insert SVG content here */}
            </img>
          </div>
        </div>
        {/* <div className="flex justify-between items-center gap-4 mt-4"> */}
        <div className="w-full grid xl:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {
                data.map(d => <BoostsCard key={d.id} title={d.title} duration={d.duration} img={d.img}/>)
            }
        </div>
      </div>
    </section>
  );
};

export default Boost;