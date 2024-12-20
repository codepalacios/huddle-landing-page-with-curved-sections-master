import React from "react";
import { StatsSection } from "./StatsSection";
import { FeaturesSection } from "./FeaturesSection";
import { CallToActionSection } from "./CallToActionSection";

function ContentSection() {
  return (
    <main className="mx-auto max-w-[90rem]">
      <StatsSection />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}

export { ContentSection };
