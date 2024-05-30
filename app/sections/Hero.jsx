import Link from "next/link";
import Header from "../components/Header";

import Image from "next/image";
function Hero() {
  return (
    <section className="hero-section flex justify-center bg-img bg-[url('/img/headerBg.png')]  bg-center bg-cover  bg-no-repeat h-[262px] md:h-[200px] bg-x-mobile sm:bg-x-desktop px-4  sm:h-[200px] w-full">
      <div className=" flex flex-col w-full max-w-[1440px]">
        <Header />
      </div>
    </section>
  );
}

export default Hero;
