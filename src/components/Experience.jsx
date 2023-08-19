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
    duration: "September - March 2023",
    position: "Intern Software Engineer",
    url: "https://syntaxgenie.com/",
  },
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
