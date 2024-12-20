import React from "react";
import { HeroNav } from "./HeroNav";
import ScreenMockups from "../../assets/images/screen-mockups.svg";

function HeroSection() {
  return (
    <header className="font-openSans max-w-[26.625rem] mx-auto lg:max-w-[90rem]">
      <HeroNav />
      <div
        className="mt-28 mb-[7.5rem] px-10 text-center text-neuVeryDarkCyan lg:mt-[14.0625rem] 
        lg:max-w-[69.5625rem] lg:px-12 lg:mx-auto"
      >
        <h1
          className="mb-6 font-poppins font-bold text-2xl leading-9 lg:mb-[1.625rem] lg:text-5xl 
          lg:leading-[4.5rem]"
        >
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-sm mb-10 lg:max-w-[37.5rem] lg:mx-auto lg:text-xl lg:mb-[3.0625rem]">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a
          className="mx-auto max-w-[12.5rem] h-10 font-bold text-xs text-white bg-priPink 
            shadow-btnContentGsff rounded-[1.25rem] flex justify-center items-center 
            hover:cursor-pointer hover:bg-priLightPink lg:max-w-[25rem] lg:h-20 lg:text-xl 
            lg:shadow-btnDesktopContentGsff lg:rounded-[2.5rem]"
          href="#"
        >
          Get Started For Free
        </a>
        <img
          className="mt-[6.5rem] lg:mt-[7.5rem] lg:mx-auto"
          src={ScreenMockups}
          alt=""
        />
      </div>
    </header>
  );
}

export { HeroSection };
