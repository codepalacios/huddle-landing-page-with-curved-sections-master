import React from "react";
import { ContactInfo } from "./ContactInfo";
import { NewsletterForm } from "./NewsletterForm";

function FooterSection() {
  return (
    <footer>
      <div className="w-full h-[19rem] bg-ftm bg-no-repeat bg-bottom-5 bg-full-width">
        {/* div for background top */}
      </div>
      <div className="bg-neuVeryDarkCyan font-openSans text-white">
        <NewsletterForm />
        <ContactInfo />
      </div>
    </footer>
  );
}

export { FooterSection };
