import React, { useRef } from "react";
import { Card } from "./Card";
import { Section } from "./Section";
import { Footer } from "./Footer";
import { Project } from "./Project";
import { Certification } from "./Certification";
import { Tools } from "./Tools";
import { Header } from "./Header";
import { ScrollUp } from "./ScrollUp";

export const Main = () => {
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      profile: profileRef,
      projects: projectsRef,
      tools: toolsRef,
      certifications: certificationsRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div className="w-full flex flex-col md:flex-row">
        {/* Sidebar (Profile Card) */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end">
          <div className="sticky top-0 h-auto md:h-screen flex justify-center">
            <Card />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[60%] flex flex-col">
          <div ref={profileRef} className="min-h-screen flex items-center justify-center">
            <Section />
          </div>
          <div ref={projectsRef} className="min-h-screen flex items-center justify-center">
            <Project />
          </div>
          <div ref={toolsRef} className="min-h-screen flex items-center justify-center">
            <Tools />
          </div>
          <div ref={certificationsRef} className="min-h-screen flex items-center justify-center">
            <Certification />
          </div>
          <div ref={contactRef} className="min-h-screen flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
      <ScrollUp />
    </>
  );
};
