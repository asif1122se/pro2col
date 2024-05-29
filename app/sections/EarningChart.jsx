import FoodActivityCard from "../components/FoodActivityCard";
import MacrosCard from "../components/MacrosCard";
import StepsChart from "../components/StepsChart";
import WeightChart from "../components/WeightChart";

function EarningChart() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center w-full max-w-[1440px] px-4">
      <div className="w-full  xl:flex gap-5">
        <FoodActivityCard/>
        <MacrosCard/>
      </div>
      <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          <StepsChart/>
          <WeightChart/>
      </div>
    </section>
  );
}

export default EarningChart;