"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS } from "@/constants/menu";
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
    name: "Assignments Tracker",
    description: `This Project is an attempt to learn to setup a easily reproducible and consistent infra on AWS for an small scale application like assignments submission portal considering every aspect of security, availability, reliability, scalability leveraging various cloud services.`,
    techStack: ["Golang", "AWS", "IAM", "EC2", "S3", "VPC", "Subnets", "Internet Gateway", "Route Table", "Route53", "Lambdas", "Security Groups", "RDS", "Parameter Group", "Cloud Watch", "StasD", "Alerting", "Load Balancers", "Auto Scaler", "DNS", "Name Servers", "CAA Records", "SubDomains", "Key Vault", "Git Actions", "Packer", "SystemD", "Shell Script", "SSl Certificates", "Roles & Policies", "Amazon Simple Mailing Service"],
    imgURL: "/images/assignment-submission.png",
    githubLink: `https://github.com/Cloud-Computing-CSYE6225-Fall2023`,
    tags: [TAGS.BACKEND],
  },
  {
    id: "audio-brief",
    name: "Audio Brief",
    description: `Designed data pipelines to process 5k ebooks from the dataset to extract each chapter and summarize
chapters, which were then converted to audio books that are stored to google cloud buckets. Engineered the process of chapter extraction through Google Pub/Sub and Cloud Functions, resulting in
optimized efficiency and enhanced reliability. Leveraged LLM with langchain and Google TTS as a Model as a Service to deliver on demand summaries and
audio transcripts for selected chapters from a book. Enhanced application debugging by facilitating proper log messages and metrics aggregated using Cloud Logging.`,
    techStack: ["Python", "FASTAPI", "Multi-Threading", "Airflow", "Pinecone", "GCP", "Cloud Storage", "Cloud SQL", "Google Pub/Sub", "Cloud Functions", "Google TTS", "Open AI", "RAG", "LangChain", "Terraform"],
    imgURL: "/images/assignment01.png",
    githubLink: `https://github.com/shivasaicharanruthala/AudioBrief`,
    webLink: `https://codelabs-preview.appspot.com/?file_id=1tawz6aVeswcHqI2OKAxYyYzYdJ5Nxs-1t2lzuXzI5OU#0`,
    tags: [TAGS.DATAENGINEER, TAGS.BACKEND],
  },
  {
    id: "semantic-search",
    name: "Contextual Search",
    description: `Developed a cutting-edge Contextual Search Application catering to analysts' needs. Leveraging vector similarity search and Redisearch with RAG, the application enables analysts to input queries and efficiently retrieve top-k statements from earnings call transcripts by ensuring a user-friendly and intuitive interface for enhanced usability.`,
    techStack: ["Google compute engine", "Airflow", "Redisearch", "FastAPI", "Streamlit", "Docker", "Terraform", "OpenAI", "RAG"],
    imgURL: "/images/assignment01.png",
    githubLink: `https://github.com/BigDataIA-Summer2023-Team1/Assignment_01`,
    webLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    demoLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    tags: [TAGS.DATAENGINEER],
  },
  {
    id: "visual-search",
    name: "Visual Search",
    description: `In this project, I harnessed the Azure Vision SDK (Florence) to conduct visual similarity searches using image vector embeddings, all prompted by user input. Employing Terraform, I established a highly reproducible Google Cloud Platform (GCP) infrastructure. Additionally, I containerized and deployed the model as a user-friendly service, allowing users to engage in tasks like background removal and image similarity searches via an intuitive UI. This endeavor highlights my proficiency in implementing cutting-edge technology and delivering seamless, reproducible solutions for real-world applications.`,
    techStack: ["Google compute engine", "Streamlit", "Docker", "Terraform", "Azure Computer Vision"],
    imgURL: "/images/assignment03.png",
    githubLink: `https://github.com/BigDataIA-Summer2023-Team1/Assignment_03`,
    webLink: `https://codelabs-preview.appspot.com/?file_id=12dn3Hs3BN9EUdLaln8LcXcGW6GwyTEJBKvV6ACbZrAk#0`,
    tags: [TAGS.DATAENGINEER],
  },
  {
    id: "prep-buddy",
    name: "PrepBuddy",
    description: `Developed a web application customized to assist university students in preparing for interviews. By seamlessly integrating Google Drive and Calendar APIs, I enabled students to schedule mock interviews with their peers. The user-friendly UI, designed in React.js, ensured easy navigation while tracking mock interviews. To prioritize security, I implemented JWT authentication and password encryption, guaranteeing secure access to resources. This project demonstrates my ability to create practical and secure applications tailored to specific user needs.`,
    techStack: ["React", "Node.js", "MongoDB", "Express", "ContextAPI", "Google calender API", "Google Drive API"],
    imgURL: "/images/prepbuddy.png",
    githubLink: `https://github.com/shivasaicharanruthala/prep-buddy-backend`,
    webLink: `https://startling-cranachan-1e8cbc.netlify.app/`,
    tags: [TAGS.BACKEND],
  },
  {
    id: "chef-it-out",
    name: "Chef It Out",
    description: `I conceptualized and developed a dynamic platform facilitating seamless connections between chefs, hotels, and consumers with just a few clicks. The platform also offers a subscription feature, allowing customers to conveniently schedule dishes. Additionally, I integrated Paytm's payment gateway to support both subscription-based payments and direct payments during checkout. This project showcases my ability to create innovative solutions that bridge culinary talents with eager audiences while ensuring efficient and secure transactions.`,
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    imgURL: "/images/chef-it-out.png",
    githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
    tags: [TAGS.BACKEND],
  },
  {
    id: "crwn-clothing",
    name: "Crwn Clothing",
    description: `Built an E-Commerce application as an educational project to grasp the fundamentals of React.js, employing the Context API for efficient state management. This project allowed me to delve into component isolation and data flow design, providing valuable insights into building robust web applications with a focus on user interfaces and seamless data management..`,
    techStack: ["React", "Node.js", "MongoDB", "Express", "Context API"],
    imgURL: "/images/crown-clothing.png",
    githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
    tags: [TAGS.BACKEND],
  },
  {
    id: "ice-breaker",
    name: "IceBreaker",
    description: `I designed and developed a robust crowdfunding website, streamlining campaign creation and management for users. By seamlessly integrating payment processing, I ensured secure contributions via various methods, including credit cards and PayPal. To enhance application reliability, I implemented Celery for email notifications and file uploads, enabling automated retries on failures. This project demonstrates my expertise in creating efficient and secure platforms that facilitate fundraising and user engagement.`,
    techStack: ["Python", "Django", "ORM", "Celery", "SQL", "Bootstrap"],
    imgURL: "/images/padhai.jpeg",
    githubLink: ``,
    tags: [TAGS.BACKEND],
  },
];

function ProjectsSection() {
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
          projectRef.classList.remove("translate-y-[5%]");
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

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedProjects(mainProjects);
      setDisplayedProjects(displayedProjects);
    } else {
      const filteredProjects = mainProjects.filter((project) =>
        project.tags.includes(value)
      );
      setSelectedProjects(filteredProjects);
      setDisplayedProjects(displayedProjects);
    }
  };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PROJECTS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        <select
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
        </select>
        <div className="sm:project-section-grid-layout flex flex-col gap-4">
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              <div className="w-full h-[200px] sm:h-[240px] rounded-md relative mb-4 overflow-hidden">
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
                  {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>}
                  {project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>}
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

export default ProjectsSection;
