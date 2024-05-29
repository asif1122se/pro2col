import AnalyticsCard from "../components/AnalyticsCard";
import Header from "../components/Header";

const analytics = [
    {
        id:1,
        title: "Hydration",
        subtitle: "Consumed Today",
        icon: "/img/anylytics-hydration.png",
        stats: "32 oz",
        total: "30",
        completed: '24',
        color: "#1671D9"
    },
    {
        id:2,
        title: "Eating window",
        subtitle: "Until Cutoff",
        icon: "/img/analytics-eating-windows.png",
        stats: "1h 45m",
        total: "30",
        completed: '24',
        color: "#F56630"

    },
    {
        id:3,
        title: "Walking",
        subtitle: "Steps Completed",
        icon: "/img/analytics-walking.png",
        stats: "1,234",
        total: "2000",
        completed: '1,234',
        color: "#9061F9"
    },
    {
        id:4,
        title: "Total Calories",
        subtitle: "Calories Consumed",
        icon: "/img/analytics-calories.png",
        stats: "1,345",
        total: "2000",
        completed: '1,345',
        color: "#3BBBB7"
    },
]
function Analytics() {
  console.log("this is test")
  return (
    <section className="hero-section flex justify-center mb-10 mt:[100px] xl:h-[200px] xl:-mt-12 xl:h-[200px] px-4  w-full max-w-[1440px]">
      {/* <div className="w-full flex justify-between xl:flex-nowrap flex-wrap  gap-6"> */}
      <div class="w-full grid xl:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            analytics.map(item => <AnalyticsCard key={item.id} icon={item.icon} title={item.title} subtitles={item.subtitle} stats={item.stats} totalStats={item.total} completed={item.completed} color={item.color}/>)
        }
      </div>
    </section>
  );
}

export default Analytics;