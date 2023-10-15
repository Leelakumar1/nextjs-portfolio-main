"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++ Programming</li>
        <li>OOPs</li>
        <li>Python Progamming</li>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Problem Solving</li>
        <li>SQL</li>
        <li>React JS</li>
        <li>Node JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <div className="mb-2">
        <li>2020-24</li>
        <li>Btech - SRM University,Kattankulathur <span className="bg-gradient-to-br from-primary-500 to-secondary-500 text-transparent bg-clip-text text-lg font-bold">GPA - 8.5</span></li>
        </div>
        <div className="mb-2">
        <li>2018-20</li>
        <li>11th & 12th - Narayana junior college,Nellore<span className="bg-gradient-to-br from-primary-500 to-secondary-500 text-transparent bg-clip-text text-lg font-bold"> GPA - 9.2</span></li>
        </div>
        <div className="mb-2">
        <li>2017-18</li>
        <li>10th - Rami reddy rayalaseema high school,Tirupathi <span className="bg-gradient-to-br from-primary-500 to-secondary-500 text-transparent bg-clip-text text-lg font-bold">GPA -9.8</span></li>
        </div>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>Prepare data for exploration</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello, and welcome to my portfolio! I'm Vemula Leela Kumar, and I'm passionate about the exciting world of data science and software development. Through this portfolio, I aim to provide you with a glimpse into my journey, accomplishments, and my love for problem-solving through coding.Over the years, I have taken on over 700 coding problems across various online platforms. These problems encompass a wide range of complexity, from fundamental algorithms to intricate data structures and real-world applications.Data science is not just a field of study for me; it's a way of life. I am constantly curious about the world of data and how it can be harnessed to make informed decisions and predictions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
