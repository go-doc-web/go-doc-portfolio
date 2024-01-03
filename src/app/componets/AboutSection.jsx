/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5/CSS3/SASS</li>
        <li>Responsive/Adaptive design</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="flex flex-col gap-4 list-disc pl-2 ">
        <li>
          <ul>
            <li>IT SCHOOL GOIT </li>
            <li>Fullstack Developer </li>
            <li>2022-2023</li>
          </ul>
        </li>

        <li>
          <ul>
            <li> ODESSA REGIONAL BASIC MEDICAL PROFESSIONAL COLLEGE </li>
            <li>paramedic</li>
            <li>1995-1998</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: "expirience",
    title: "Expirience",
    content: (
      <ul className="list-disc pl-2">
        <li>1997-2007 - Odessa Hospital</li>
        <li>2008-2014 - Lugansk Karton, LLC</li>
        <li>2014-2020 - DI POL, LLC</li>
        <li>2020-2024 - Oficer of Security , freelance</li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FullStack Developer course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white grid">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap:16 sm-py-16 xl:px-16  ">
        <Image
          src="/images/about-img-3.jpg"
          width={500}
          height={500}
          alt="programmer at work"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Hi! I am a Junior Full Stack Developer with a passion for sports,
            rock music, and programming. My education and experience enable me
            to proficiently handle HTML5, CSS3, JavaScript, Git, and React. I
            love tackling challenging problems and strive for continuous
            development. Ready to work with bold, positive, and creative teams.
            Give me a chance to contribute to your project!
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("expirience")}
              active={tab === "expirience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
