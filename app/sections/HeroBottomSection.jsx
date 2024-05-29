import HeaderBottom from "../components/HeaderBottom";

function HeroBottomSection() {
  return (
    <section className="hero-section relative top-[-30px] flex justify-center  md:h-[200px] bg-x-mobile sm:h-[200px] px-4  w-full max-w-[1440px]">
      <div className="w-full flex flex-col">
        <HeaderBottom />
      </div>
    </section>
  );
}

export default HeroBottomSection;
