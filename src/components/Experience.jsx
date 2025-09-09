import "../styles/experience.css";
import SubHeading from "./shared/subHeading";
import Tabs from "./shared/Tabs";
const tabsData = [
  {
    label: "Syntax Genie",
    content: [
      "Developed and maintained code for client websites primarily using React, HTML, CSS, Sass and Typescript",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Collaborated with the design team to implement user interface components and interactions, ensuring a seamless and visually appealing user experience",
    ],
    duration: "Oct 2022 - Mar 2023",
    position: "Intern Software Engineer",
    url: "https://syntaxgenie.com/",
  },
    {
    label: "Random Software",
    content: [
      "Contributed to a large-scale application serving clients across the USA and Canada.",
      "Developed and maintained the frontend using Angular and implemented scalable backend services on AWS.",
      "Delivered updates in a 2-week sprint Agile methodology, collaborating closely with crossfunctional teams for continuous improvement.",
      "Resolved critical issues through hotfixes, ensuring minimal downtime and high user satisfaction.",
      "Leveraged Cypress for automation testing, enhancing code reliability and deployment efficiency.",
      "Optimized application performance, improving responsiveness and scalability to support a growing user base.",
      "Refined skills in building and maintaining enterprise-scale applications while adhering to Agile principles and client-focused outcomes.",
    ],
    duration: "Aug 2023 - Dec 2024",
    position: "Junior Software Engineer",
    url: "https://randomsoftware.net/",
  },
    {
    label: "Mathemly",
    content: [
      "Designed and implemented interactive user interfaces with React, NextJs enhancing user experience and engagement.",
      "Utilized Strapi for backend operations, optimizing algorithms and ensuring efficient data handling.",
      "Architech and build Softwares from the ground up.",
    ],
    duration: "Apr 2025 - present",
    position: "Software Engineer",
    url: "https://www.linkedin.com/company/mathemly/posts/?feedView=all",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <SubHeading heading="Where I’ve Worked" />
      <Tabs tabs={tabsData} />
    </section>
  );
};

export default Experience;
