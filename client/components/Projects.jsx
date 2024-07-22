import React from "react";
import ProjectsImg from "./ProjectsImg";
import SayHello from '../components/Sayhello';


const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="text-gradient-projectheading">projects</div>
        <div className="text-gradient-projectcontent">
          I help startups and series A—D teams to establish a strong connection
          between their product and customers
        </div>
      </div>
      <ProjectsImg/>
      <SayHello/>
    </>
  );
};

export default Projects;
