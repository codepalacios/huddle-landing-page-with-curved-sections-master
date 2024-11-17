import React from "react";
import { StatsSection } from "./StatsSection";
import { FeaturesSection } from "./FeaturesSection";
import { CallToActionSection } from "./CallToActionSection";

function ContentSection() {
  return (
    <main>
      <StatsSection />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}

export { ContentSection };
