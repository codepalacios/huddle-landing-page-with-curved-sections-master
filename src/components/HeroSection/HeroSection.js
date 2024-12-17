import React from "react";
import { HeroNav } from "./HeroNav";
import ScreenMockups from "../../assets/images/screen-mockups.svg";

function HeroSection() {
  return (
    <header className="font-openSans max-w-[26.625rem] mx-auto">
      <HeroNav />
      <div className="mt-28 mb-[7.5rem] px-10 text-center text-neuVeryDarkCyan">
        <h1 className="mb-6 font-poppins font-bold text-2xl leading-9">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-sm mb-10">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a
          className="mx-auto max-w-[12.5rem] h-10 font-bold text-xs text-white bg-priPink 
            shadow-btnContentGsff rounded-[1.25rem] flex justify-center items-center 
            hover:cursor-pointer hover:bg-priLightPink hover:shadow-btnHoverContentGsff"
          href="#"
        >
          Get Started For Free
        </a>
        <img className="mt-[6.5rem]" src={ScreenMockups} alt="" />
      </div>
    </header>
  );
}

export { HeroSection };
