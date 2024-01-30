"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { projectdetails } from "projectdetails";
import projectstyles from "../../styles/Project.module.css";
import { motion } from "framer-motion";

export default function Project({ params }) {
  const [projectData, setprojectData] = useState(null);

  useEffect(() => {
    const project = projectdetails.find((p) => p.id.toString() === params.id);

    if (project) {
      console.log("Project found:", project);
      setprojectData(project);
    } else {
      console.log("Project not found");
    }
  }, [params.id]);

  return (
    <>
      <Navbar isHomepage={true} />
      <motion.div
        className={projectstyles.projectContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        <motion.h2 className={projectstyles.projecttitle}>
          {projectData?.tiletitle}
        </motion.h2>
        <div className={projectstyles.projectImageContainer}>
          <motion.img
            src={projectData?.image}
            alt={projectData?.title}
            className={projectstyles.projectImage}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          />
        </div>
        <motion.p className={projectstyles.projectDescription}>
          {projectData?.description}
        </motion.p>
        <motion.p className={projectstyles.projectDescription}>
          {projectData?.description1}
        </motion.p>
        <motion.p className={projectstyles.projectDescription}>
          {projectData?.description2}
        </motion.p>
        <motion.p className={projectstyles.projectDescription}>
          {projectData?.description3}
        </motion.p>
      </motion.div>
    </>
  );
}
