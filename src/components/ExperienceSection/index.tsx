import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import AppSection from "../AppSection";
import { EXPERIENCE } from "@/constants/menu";
import AppText from "../AppText";
import Image from "next/image";

const experienceArr = [
  {
    id: "Job1",
    role: "Research Assistant",
    company: "Northeastern University",
    companyUrl: "https://www.northeastern.edu/",
    companyLogoUrl: "/images/northeastern-university-logo.png",
    workingPeriod: "January 2023 - May 2023",
    highlights: [
      `Assisted students at AiSunks club get their  hands on the open source projects. Organized meetings and monitor work progress.`,
      `I have been editor for AiSunks medium magazine and  github pages.`
    ],
  },
  {
    id: "Job2",
    role: "Software Engineer (Golang)",
    company: "ZopSmart",
    companyUrl: "https://zopsmart.com/about",
    companyLogoUrl: "/images/zopsmart.png",
    workingPeriod: "May 2021 - June 2022",
    highlights: [
      `Developed customer personalization API in Golang resulting in improved targeted marketing. These services  scaled to handle a throughput of 9k requests/min.`,
      `Optimized database queries resulting in user details API response time reduced by 5% leading to a 20% decrease in resource utilization.`,
      `Migrated application deployments from Spinnaker to Harness with a quick adoption to a new business deal.`,
      `Revamped the UI by adding new functionalities for an internal tool, have improved usability and bring down testing efforts by 30%, effectively resolving data inconsistencies across various services.`,
      `Enhanced locking mechanism to handle bulk records helped migrating 100M records faster by 20%.`,
      `Performed 30+ PR reviews, Handled 6+ Production releases and given a couple of knowledge transfers making new folks on par with the rest of the team.`
    ],
  },
  {
    id: "Job3",
    role: "Software Engineering Intern",
    company: "ZopSmart",
    companyUrl: "https://zopsmart.com/about",
    companyLogoUrl: "/images/zopsmart.png",
    workingPeriod: "June 2021 - May 2021",
    highlights: [
      `Developed API's in Golang  by adapting to layered architecture and documented requirements in swagger.`,
      `Integrated Redis-based Session management to online examination service. This lead to a 5% reduction in Session disruptions, thereby improving exam reliability and enhanced overall user experience.`,
      `Orchestrated CI/CD pipelines to streamline the process of unit testing, code containerising, publishing build images to Registry  and deploying to GCP has reduced delivery time by 80% and ensuring consistent releases.`
    ],
  },
  {
    id: "Job4",
    role: "SWE Intern",
    company: "Jivass Technologies",
    companyUrl: "https://jivass.com/about-us/",
    companyLogoUrl: "/images/jivaas.png",
    workingPeriod: "May 2020 - Jul 2020",
    highlights: [
      `Scrapped and curated 3000 train schedule data.`,
      `Developed end to end application to visualize trains network on the graph using D3.js and simulate trains according to their schedule.`,
      `This project is a proof of concept for algorithms that are designed/analyzed to minimize train delays.`,
      `Deployed the application on E2E network.`
    ],
  },
];

function ExperienceSection() {

  const timeLineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    experienceArr.forEach(experience => {
      const timeLineRef = timeLineRefs.current[experience.id];

      if(!timeLineRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.intersectionRatio && !entry.isIntersecting) {
          timeLineRef.classList.remove(`show-timeline-content`);
          timeLineRef.classList.add(`hide-timeline-content`);
        }

        if (entry.intersectionRatio > 0.2 && entry.isIntersecting) {
          timeLineRef.classList.remove(`hide-timeline-content`);
          timeLineRef.classList.add(`show-timeline-content`);
        }
      };
      const obsOptions = {
        root: null,
        threshold: [0, 0.2],
      };
      const timelineObserver = new IntersectionObserver(
        obsCallBack,
        obsOptions,
      );
      timelineObserver.observe(timeLineRef);
      observerRefs.current[experience.id] = timelineObserver;
    });

    return () => {
      experienceArr.forEach(experience => {
        observerRefs.current[experience.id].disconnect();
      });
    };
  }, []);


  return (
    <AppSection headerTxt={EXPERIENCE}>
      <div
        className={`section-content-padding w-full relative flex flex-col gap-8 before:content-[''] before:absolute before:h-full before:w-1 before:rounded-full before:bg-borderColor lg:before:left-1/2 before:left-[30px]`}
      >
        {experienceArr.map((experience, index) => {
          return (
            <div
              className="py-4 lg:px-16 px-8 relative"
              key={experience.id}
              ref={(el) => (timeLineRefs.current[experience.id] = el)}
            >
              <div
                className={classNames(
                  `bg-backgroundColor-card-day dark:bg-backgroundColor-card-night h-full rounded-md relative p-4 border-b-4 border-borderColor hover:border-primaryColor-light lg:w-[45%] w-[calc(100%-24px)] left-[44px] transition-all duration-500 ease-in-out`,
                  index % 2 === 0 &&
                    `lg:left-0 after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night lg:after:left-[calc(100%-4px)] after:-left-[4px] after:top-6`,
                  index % 2 !== 0 &&
                    `lg:left-[55%] after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night after:-left-[4px] after:top-6`
                )}
              >
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {experience.role}
                </AppText>
                <AppText textTag="p" default secondary semiBold>
                  {experience.company}
                </AppText>
                <ul className="list-disc p-4 marker:text-textColor-primary-day dark:marker:text-textColor-primary-night">
                  {experience.highlights.map((highlight, index) => {
                    return (
                        <li key={index}>
                          <AppText textTag="p" default defaultColor>
                            {highlight}
                          </AppText>
                        </li>
                    );
                  })}
                </ul>
                <AppText textTag={"p"} semiBold default defaultColor customClass="lg:hidden mt-2">
                  {experience.workingPeriod}
                </AppText>
              </div>
              <div
                className={`bg-backgroundColor-day p-2 dark:bg-backgroundColor-night border-4 border-borderColor absolute h-16 w-16 rounded-full top-3 lg:left-[calc(50%-30px)] left-0 transition-transform duration-500 ease-in-out`}
              >
                <a href={experience.companyUrl} target={"_blank"}>
                  <Image
                    alt={experience.company}
                    src={experience.companyLogoUrl}
                    fill
                  />
                </a>
              </div>
              <div
                className={classNames(
                  `w-[45%] h-16 rounded-md absolute top-2 lg:flex lg:items-center hidden transition-all duration-500 ease-in-out`,
                  index % 2 === 0 && `left-[55%]`,
                  index % 2 !== 0 && `left-0 justify-end`
                )}
              >
                <AppText textTag={"p"} semiBold default defaultColor>
                  {experience.workingPeriod}
                </AppText>
              </div>
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default ExperienceSection;
