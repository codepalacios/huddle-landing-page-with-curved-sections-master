import React from "react";
import { ContactInfo } from "./ContactInfo";
import { NewsletterForm } from "./NewsletterForm";

function FooterSection() {
  return (
    <footer>
      <ContactInfo />
      <NewsletterForm />      
    </footer>
  );
}

export { FooterSection };
