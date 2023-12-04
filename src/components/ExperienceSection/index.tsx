import React, { useRef, useEffect } from "react";
import AppSection from "@/components/AppSection";
// import { EDUCATION } from "@/constants/menu";
import Image from "next/image";
import AppText from "@/components/AppText";
import CywareImage from "@images/icons/cyware.svg";

const contactInfoArr = [
    {
      id: "github",
      icon: CywareImage,
      url: "https://github.com/shivasaicharanruthala",
    },]

function ExperienceSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});


  return (
    <AppSection headerTxt={"experience"}>
     <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Machine Learning Engineer Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">SQUPUS</div>
    <time className="font-caveat font-medium text-amber-500">June 2020 - August 2020</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
  <li> Worked on improving the accuracy of Traffic Sign Board Detection algorithm using Computer Vision techniques</li>
    <li>Used Computer Vision Algorithms and Classified the GTSRB dataset to maintain higher accuracies.</li>
    <li>Observed an effective increase of 33% in the F1-score of cross-validation</li>
  </ul> 
    </div>
    
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Member of Technical Staff Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">ShopConnect</div>
    <time className="font-caveat font-medium text-amber-500">January 2021 - June 2021</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Developed a seamless video calling feature for an e-commerce platform using WebRTC, enhancing real-time customer engagement.</li>
    <li>Resolved critical client bugs and automated booking receipts with QR codes, optimizing functionality and user experience.</li>
    <li>Mastered full-stack development with Angular 8, Node.js, Express.js, and MongoDB, delivering a cohesive front-end and back-end solution.</li>
  </ul>    
  </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Software Engineer</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">Cyware Labs</div>
    <time className="font-caveat font-medium text-amber-500">June 2021 - May 2022</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Drove a 40% scalability boost by transitioning from a Monolithic to Microservices architecture and optimizing Docker images in AWS.</li>
    <li>Led the development of an Integration Testing Framework, enabling accurate end-to-end application flow predictions.</li>
    <li>Demonstrated expertise across a diverse tech stack including Elastic Search, Django, Flask, Krakend, and Kafka.</li>
  </ul>
      </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500  shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path d="M0 1000 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0
-1000z m1111 593 c90 -88 109 -112 109 -137 0 -73 -65 -87 -125 -26 -21 22
-43 40 -47 40 -4 0 -8 -155 -8 -345 l0 -345 -25 -16 c-48 -31 -66 -15 -187
161 -62 90 -116 164 -120 165 -4 0 -9 -71 -10 -157 l-3 -157 -27 -16 c-25 -13
-31 -13 -55 0 l-28 16 0 274 0 275 26 9 c52 18 69 3 189 -172 l115 -167 3 239
c1 131 0 241 -3 244 -2 3 -27 -16 -54 -41 -29 -27 -60 -47 -72 -47 -33 0 -59
29 -59 65 0 26 16 47 109 138 85 85 114 107 136 107 22 0 51 -22 136 -107z
m-647 -271 c15 -17 16 -48 14 -283 l-3 -263 -27 -16 c-25 -13 -31 -13 -55 0
l-28 16 -3 266 c-2 232 0 268 14 282 21 22 67 20 88 -2z m974 -13 c110 -54
162 -142 162 -268 0 -115 -66 -213 -175 -263 -40 -17 -73 -23 -160 -26 -99 -4
-113 -2 -135 16 l-25 20 0 262 c0 247 1 262 19 276 15 10 51 14 136 14 110 0
120 -2 178 -31z m-916 -663 c24 -13 32 -13 57 0 63 32 101 -16 94 -120 -3 -56
-6 -61 -28 -53 -11 5 -15 21 -15 61 0 64 -19 93 -50 76 -15 -8 -20 -24 -22
-73 -3 -54 -5 -62 -23 -62 -18 0 -20 8 -23 62 -3 69 -18 91 -51 74 -16 -9 -21
-23 -23 -74 -3 -54 -5 -62 -23 -62 -18 0 -20 8 -23 83 -2 67 0 83 13 88 8 4
21 2 28 -4 8 -7 18 -6 31 4 24 17 25 17 58 0z m333 0 c39 -17 55 -42 55 -88 0
-67 -60 -110 -124 -88 -44 14 -66 44 -66 88 0 45 16 71 53 87 40 18 41 18 82
1z m248 -14 c13 -12 17 -31 17 -89 0 -65 -2 -73 -19 -73 -16 0 -19 10 -23 66
-4 73 -19 92 -53 70 -16 -11 -21 -26 -23 -75 -3 -53 -6 -61 -22 -61 -18 0 -20
7 -20 90 0 72 3 90 14 90 8 0 17 -4 21 -9 3 -6 16 -4 31 4 28 14 49 11 77 -13z
m191 14 c25 -10 37 -24 46 -51 7 -20 8 -41 4 -45 -5 -5 -38 -10 -73 -12 -63
-3 -64 -4 -46 -21 13 -13 26 -17 44 -13 48 12 56 11 56 -4 0 -8 -13 -21 -29
-29 -23 -11 -36 -11 -68 -2 -88 27 -83 162 7 184 11 3 21 5 23 6 1 0 18 -5 36
-13z m141 -53 c11 -28 23 -55 27 -58 4 -4 15 19 24 50 18 57 39 79 54 55 8
-12 -58 -195 -86 -237 -10 -16 -24 -23 -44 -23 -37 0 -41 26 -6 39 37 15 37
45 1 128 -18 42 -31 83 -28 90 11 27 37 7 58 -44z"/>
    <path d="M1230 1050 l0 -170 55 0 c70 0 112 17 152 63 39 44 50 95 33 150 -24
80 -97 127 -197 127 l-43 0 0 -170z"/>
    <path d="M787 608 c-28 -22 -32 -63 -8 -87 24 -24 40 -26 66 -7 37 27 15 106
-30 106 -6 0 -19 -6 -28 -12z"/>
    <path d="M1228 609 c-31 -17 -20 -29 27 -29 46 0 54 7 33 28 -15 15 -37 15
-60 1z"/>
  </g>
</svg>

    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Software Development Engineer</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">INDmoney</div>
    <time className="font-caveat font-medium text-amber-500">May 2022 - August 2023</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Perfected MF-Central integration, delivering 100% accurate real-time market updates and enhanced investor insights.</li>
    <li>Boosted backend GoLang test automation by 80% and established a dynamic error notification system with NewRelic.</li>
    <li>Scaled user base support to 1 Million daily customers, ensuring stable cross-functional system performance.</li>
    <li>Specialized in Kafka, PostgreSQL, Docker, and AWS services (SQS, S3, ECS) to elevate operational efficiency.</li>
  </ul>
</div>

</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">MS in Software Engineering</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">San Jose State University</div>
    <time className="font-caveat font-medium text-amber-500">August 2023 - Present</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Specialization : Data Science</li>
    <li>Coursework : Machine Learning, Enterprise Application Development, Software Engineering Platforms</li>
    <li>Research Interests : Deep Learning and Natural Language Processing</li>
  </ul>
    </div>
</div>

</div>
    </AppSection>
  );
}

export default ExperienceSection;
