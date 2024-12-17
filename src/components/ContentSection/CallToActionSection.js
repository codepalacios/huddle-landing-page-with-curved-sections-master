import React from "react";

function CallToActionSection() {
  return (
    <article className="px-4 text-center max-w-[26.625rem] mx-auto">
      <h2 className="mb-10 font-poppins font-bold text-2xl text-neuVeryDarkCyan">
        Ready To Build Your Community?
      </h2>
      <a
        className="mx-auto max-w-[12.5rem] h-10 font-poppins text-white font-bold text-xs 
        bg-priPink shadow-btnContentGsff rounded-[1.25rem] flex justify-center items-center 
        hover:cursor-pointer hover:bg-priLightPink hover:shadow-btnHoverContentGsff"
      >
        Get Started For Free
      </a>
    </article>
  );
}

export { CallToActionSection };
