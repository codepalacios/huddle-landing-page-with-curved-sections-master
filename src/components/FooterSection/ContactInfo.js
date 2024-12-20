import React from "react";
import logoFooter from "../../assets/images/logo-footer.svg";
import iconPhone from "../../assets/images/icon-phone.svg";
import iconEmail from "../../assets/images/icon-email.svg";

function ContactInfo() {
  return (
    <div className="px-7 pb-[2.875rem] text-sm max-w-[26.625rem] mx-auto lg:px-0 lg:pb-0 lg:mx-0">
      <img
        className="w-[12.5rem] h-8 mb-4 lg:w-60 lg:h-[2.375rem] lg:mb-[1.6875rem]"
        src={logoFooter}
        alt="logo"
      />
      <p className="mb-10 font-semibold lg:mb-6 lg:max-w-[21.25rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div className="mb-4 flex gap-4 items-center lg:gap-[1.25rem]">
        <img className="w-[1.125rem] h-[1.125rem]" src={iconPhone} alt="" />
        <p className="lg:text-base">Phone: +1-543-123-4567</p>
      </div>
      <div className="mb-12 flex gap-4 items-center lg:mb-20 lg:gap-[1.25rem]">
        <img className="w-5 h-4" src={iconEmail} alt="" />
        <p className="break-all lg:text-base">example@huddle.com</p>
      </div>
      <div className="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon w-6 fill-current text-white hover:cursor-pointer hover:text-iconContact lg:w-8"
          viewBox="0 0 512 512"
        >
          <path
            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
            fill-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon w-6 fill-current text-white hover:cursor-pointer hover:text-iconContact lg:w-8"
          viewBox="0 0 512 512"
        >
          <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
          <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon w-6 fill-current text-white hover:cursor-pointer hover:text-iconContact lg:w-8"
          viewBox="0 0 512 512"
        >
          <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
        </svg>
      </div>
    </div>
  );
}

export { ContactInfo };
