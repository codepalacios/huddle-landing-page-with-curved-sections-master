import React from "react";
import { ContactInfo } from "./ContactInfo";
import { NewsletterForm } from "./NewsletterForm";

function FooterSection() {
  return (
    <footer className="mx-auto max-w-[90rem]">
      <div
        className="w-full h-[19rem] bg-ftm bg-no-repeat bg-bottom-5 bg-full-width 
        tab:h-[21rem] tab:bg-ftd"
      >
        {/* div for background top for footer */}
      </div>
      <div
        className="bg-neuVeryDarkCyan font-openSans text-white lg:pt-[7.625rem] 
        lg:px-[7.5rem] lg:pb-[6.4375rem] lg:flex lg:flex-row-reverse lg:justify-between lg:gap-4"
      >
        <NewsletterForm />
        <ContactInfo />
      </div>
    </footer>
  );
}

export { FooterSection };
