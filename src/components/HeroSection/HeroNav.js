import React from "react";
import logo from "../../assets/images/logo.svg";

function HeroNav() {
  return (
    <nav className="pt-6 px-6 flex justify-between items-center flex-wrap gap-2 lg:pt-[4.875rem] lg:pr-[3.9375rem] lg:pl-20">
      <img className="w-24 h-4 lg:w-60 lg:h-[2.375rem]" src={logo} alt="logo" />
      <a
        className="w-20 min-h-[1.4706rem] text-[.5882rem] text-priPink border border-priPink 
          rounded-[.7353rem] shadow-btnHeroTif flex justify-center items-center hover:cursor-pointer 
          hover:border-priLightPink hover:text-priLightPink lg:w-[8.5rem] lg:h-10 lg:text-base 
          lg:rounded-[1.25rem] lg:shadow-btnDesktopHeroTif"
      >
        Try It Free
      </a>
    </nav>
  );
}

export { HeroNav };
