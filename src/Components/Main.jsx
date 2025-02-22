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
      <Header scrollToSection={scrollToSection}/>
      <div className="w-full flex">
        <div className="w-[40%] flex justify-end">
          <div className="sticky top-0 h-screen flex justify-center">
            <Card />
          </div>
        </div>
        <div className="w-[6%]"></div>

        <div className="w-[54%] min-h-screen overflow-y-auto">
          <div ref={profileRef}>
            <Section />
          </div>
          <div ref={projectsRef}>
            <Project />
          </div>
          <div ref={toolsRef}>
            <Tools />
          </div>
          <div ref={certificationsRef}>
            <Certification />
          </div>
          <div ref={contactRef}>
            <Footer />
          </div>
          <ScrollUp />
        </div>
      </div>
    </>
  );
};
