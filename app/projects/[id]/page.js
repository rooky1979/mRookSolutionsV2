"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { projectdetails } from "projectdetails";
import projectstyles from "../../styles/Project.module.css";
import { motion } from "framer-motion";

export default function Project({ params }) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const project = projectdetails.find((p) => p.id.toString() === params.id);

    if (project) {
      console.log("Project found:", project);
      setProjectData(project);
    } else {
      console.log("Project not found");
    }
  }, [params.id]);

  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={projectstyles.projecttitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        {projectData?.tiletitle}
      </motion.h2>
    </>
  );
}
