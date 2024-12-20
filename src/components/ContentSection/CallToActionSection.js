import React from "react";

function CallToActionSection() {
  return (
    <article className="px-4 text-center max-w-[26.625rem] mx-auto lg:px-12 lg:max-w-[49rem]">
      <h2
        className="mb-10 font-poppins font-bold text-2xl text-neuVeryDarkCyan lg:mb-[2.625rem] 
        lg:text-[2.5rem] lg:leading-[3.75rem]"
      >
        Ready To Build Your Community?
      </h2>
      <a
        className="mx-auto max-w-[12.5rem] h-10 font-poppins text-white font-bold text-xs 
        bg-priPink shadow-btnContentGsff rounded-[1.25rem] flex justify-center items-center 
        hover:cursor-pointer hover:bg-priLightPink lg:max-w-[25rem] lg:h-20 lg:text-xl 
        lg:shadow-btnDesktopContentGsff lg:rounded-[2.5rem]"
      >
        Get Started For Free
      </a>
    </article>
  );
}

export { CallToActionSection };
