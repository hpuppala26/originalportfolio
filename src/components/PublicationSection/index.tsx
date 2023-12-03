"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS, PUBLICATIONS } from "@/constants/menu";
import AppButton from "../AppButton";
import AppText from "../AppText";
import GithubLogo from "@images/icons/github-logo.svg";
import GlobeIcon from "@images/icons/globe-icon.svg";
import PlayIcon from '@images/icons/play-icon.svg';
import Image from "next/image";

const TAGS = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATAENGINEER: "Data Engineering"
};

const PER_PAGE_PROJECTS = 3;

const randomColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
  "text-pink-600",
  "text-purple-600",
  "text-indigo-600",
  "text-teal-600",
  "text-orange-600",
  "text-lime-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-amber-600",
  "text-fuchsia-600",
  "text-true-gray-600",
];

const mainProjects = [
  {
    id: "assignments-tracker",
    name: "Design and analysis of generative adversarial networks for time series data augmentation",
    description: `We wanted to achieve the model that was able to learn about the data distribution and its underlying information of data files and successfully generate synthetic data.`,
    techStack: ["TimeGAN", "GAN", "Supervised Learning", "Autoencoders", "RNN", "LSTM", "Prophet", "Reinforcement Learning", "PCA", "t-SNE", "Random Forest Regression", "DNN", "Scikit Learn", "Numpy", "Pandas", "Matplotlib", "Clustering", "SVM", "K-Means Clustering", "Decision Trees", "Logistic Regression"],
    imgURL: "/images/ijaresm.jpg",
    githubLink: `http://www.ijaresm.com/design-and-analysis-of-generative-adversarial-networks-for-time-series-data-augmentation`,
  }
];

function PublicationSection() {
  const [selectedProjects, setSelectedProjects] = useState(mainProjects);
  const [displayedProjects, setDisplayedProjects] = useState(PER_PAGE_PROJECTS);

  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const projectObserverRefs = useRef<{ [key: string]: IntersectionObserver }>(
    {}
  );

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const projectRef = projectRefs.current[project.id];

      if (!projectRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove("opacity-100");
          projectRef.classList.remove("translate-y-0");
          projectRef.classList.add("opacity-0");
          projectRef.classList.add("translate-y-[5%]");
        } else {
          projectRef.classList.remove("opacity-0");
          projectRef.classList.remove("translate-y-[95%]");
          projectRef.classList.add("opacity-100");
          projectRef.classList.add("translate-y-0");
        }
      };

      const obsOptions = {
        root: null,
        threshold: 0,
      };

      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      selectedProjects.forEach((project) => {
        projectObserverRefs.current[project.id]?.disconnect();
      });
    };
  }, [selectedProjects, displayedProjects]);

//   const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     if (value === "all") {
//       setSelectedProjects(mainProjects);
//       setDisplayedProjects(displayedProjects);
//     } else {
//       const filteredProjects = mainProjects.filter((project) =>
//         project.tags.includes(value)
//       );
//       setSelectedProjects(filteredProjects);
//       setDisplayedProjects(displayedProjects);
//     }
//   };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PUBLICATIONS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        {/* <select
          onChange={onSelectTag}
          className="self-end bg-transparent border-2 rounded-md border-borderColor p-2 cursor-pointer text-textColor-primary-day dark:text-textColor-primary-night"
        >
          {["all", ...Object.values(TAGS)].map((tag) => {
            return (
              <option
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
                key={tag}
                value={tag}
              >
                {tag}
              </option>
            );
          })}
        </select> */}
        <div className="sm:project-section-grid-layout flex flex-col gap-1" style={{ width: '500px' }} >
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              <div className="w-[100px] h-[400px] sm:h-[100px] rounded-md relative mb-4 overflow-hidden">
                <Image alt={project.name} src={project.imgURL} fill />
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex gap-2 justify-between align-center">
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {project.name}
                </AppText>
                  <div className="flex gap-2 align-center justify-end">
                  <a href={project.githubLink} target="_blank">
                    <GithubLogo className="h-9 w-9" />
                  </a>
                  {/* {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>}
                  {project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>} */}
                </div>
                  </div>
                <AppText textTag="p" default secondary>
                  {project.description}
                </AppText>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => {
                    return (
                      <p
                        key={stack}
                        className={`text-sm ${index < randomColors.length ? randomColors[index] : randomColors[Math.floor(Math.random() * (13))]}`}
                      >{`#${stack}`}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProjects.length > PER_PAGE_PROJECTS && (
          <AppButton
            buttonType="secondary"
            buttonText={`${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } `}
            ariaLabel={`click to ${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } projects`}
            onClick={handleOnClickBtn}
          />
        )}
      </div>
    </AppSection>
  );
}

export default PublicationSection;
