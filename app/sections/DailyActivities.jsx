import React from "react";
import DailyActivityCard from "../components/DailyActivityCard"
const data = [
  {
    id: 1,
    title: "Cardio Exercise",
    text: "Track activities like running, cycling, swimming, or any aerobic exercises",
    img: "/img/cardio-exe.png"
  },
  {
    id: 2,
    title: "Strength Training",
    text: "Monitor weightlifting, bodyweight exercises, and resistance training sessions",
    img: "/img/stretch-exe.png"
  },
  {
    id: 3,
    title: "Yoga and Flexibility",
    text: "Include yoga, stretching routines, and flexibility exercises.",
    img: "/img/yoga.png"
  },
];
const DailyActivities = () => {
  return (
    <section className="hero-section flex justify-center mt-10 mb-10 w-full px-4 max-w-[1440px]">
      <div className=" flex flex-col">
        <div className="flex items-center gap-x-20">
          <div className="flex-grow text-gray-900 font-inter font-semibold text-xl">
            Daily Activities
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
        <div className="w-full grid xl:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {
                data.map(d => <DailyActivityCard key={d.id} title={d.title} text={d.text} img={d.img}/>)
            }
        </div>
      </div>
    </section>
  );
};

export default DailyActivities;
