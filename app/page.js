import Hero from "./sections/Hero";
import HeroBottomSection from "./sections/HeroBottomSection";
import Analytics from "./sections/Analytics";
import EarningChart from "./sections/EarningChart";
import DailyActivities from "./sections/DailyActivities";
import Boost from "./sections/Boost";


export default function Home() {

  return (
    <main className="min-h-screen mx-auto flex flex-col justify-center items-center bg-white">
      <Hero />
      <HeroBottomSection/>
      <Analytics/>
      <EarningChart/>
      <DailyActivities/>
      <Boost/>
    </main>
  );
}
