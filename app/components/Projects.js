import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
  "cinemabooking.png",
  "virtualpet1.png",
  "taxiwebsite1.png",
  "yfm.png",
  "mrooksolns.png",
  "stalls.png",
  "hng.png",
  "hngv2.png",
  "inklab.png",
  "mrooksolnsv2.png",
];

const Projects = () => {
  return (
    <div>
      <ProjectCarousel images={projects} />
    </div>
  );
};

export default Projects;
