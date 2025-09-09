import SubHeading from "./shared/subHeading";
import "../styles/projects.css";
import Folder from "./shared/Folder";
import uuid from "react-uuid";

const projectData = [
  {
    title: "Picture App",
    description:
      "This web application merges photography with locations using MongoDB, Express, React, and Node.js. Tag photos with precision using Google Maps API.",
    tech: ["React", "Node.js", "Express", "Mongodb"],
    git: "https://github.com/kvnd100/Picture-app",
    url: "https://picture-app-cfa16ee42abb.herokuapp.com/",
  },
  {
    title: "Portfolio",
    description: "Personal website build using React.",
    tech: ["React"],
    git: "https://github.com/kvnd100/portfolio-website",
  },
  {
    title: "Tile Game",
    description:
      "Tile game built using vanilla javascript. Navigate your character using key commands to complete challenges.",
    tech: ["HTML", "CSS", "Javascript"],
    git: "https://github.com/kvnd100/GameAssignment",
  },
  {
    title: "Inventory Management System",
    description:
      "An inventory management system built using php,javascript,html and css as a group assignment.",
    tech: ["HTML", "CSS", "Javascript", "PHP"],
    git: "https://github.com/kvnd100/Inventory-Management-System",
  },
];

const Work = () => {
  return (
    <section id="work" className="projects">
      <SubHeading heading="Some Things I’ve Built" />
      <ul className="projects-grid">
        {projectData.map((val) => (
          <Folder
            key={uuid()}
            git={val.git}
            url={val.url}
            title={val.title}
            description={val.description}
            tech={val.tech}
          />
        ))}
      </ul>
    </section>
  );
};

export default Work;
