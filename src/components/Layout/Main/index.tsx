"use client";

import React from "react";
import HeaderSection from "@/components/HeaderSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationSection from "@/components/PublicationSection";

function Main() {
  return (
    <main className="flex-1">
      <HeaderSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <PublicationSection/>
      <ProjectsSection/>
      <CertificationsSection />
    </main>
  );
}

export default Main;
