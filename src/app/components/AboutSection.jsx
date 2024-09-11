"use client";
import React, { useTransition, useState, startTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Time Managment</li>
        <li>Creativity</li>
        <li>Problem Solving</li>
        <li>C / C++</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2nd year Licence at ISI (Computer Science)</li>
        <li>Pioneer High School of Ariana : Bac Math (16.31)</li>
        <li>Pioneer Prep School of Lac (17.06)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Hedera : Hashgraph Developer Course (Dar Blockchain)</li>
        <li>Responsive Web Design (FreeCodeCamp)</li>
        <li>IEEE Extreem 17.0 (IEEE)</li>
        <li>Python (GOMYCODE)</li>
        <li>German A2 (ÖSD)</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div id="about" className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/img.webp" width={500} height={500} />
        <div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-xl">
              Hello, my name is Rafi Bettaieb . I am currently a student at the
              Higher Institute of Computer Science, where I am deepening my
              knowledge and skills in technology and programming. Recently, I
              had the opportunity to participate in the TCPC (Tunisian
              Collegiate Programming Contest), which fueled my passion for
              problem-solving and coding. With a diverse range of interests and
              a keen enthusiasm for technology, I am driven to continually learn
              and apply my skills in innovative ways. My goal is to leverage my
              programming abilities to contribute meaningfully to the tech
              industry. I am eager to engage in projects and opportunities that
              challenge me and allow me to grow both personally and
              professionally. I am always open to connecting with like-minded
              individuals and exploring new opportunities in the tech field.
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
      </div>
    </section>
  );
}

export default AboutSection;
