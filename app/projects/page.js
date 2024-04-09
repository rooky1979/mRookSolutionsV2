"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { projectdetails } from "/projectdetails";
import projectstyles from "../styles/Project.module.css";
import { motion } from "framer-motion";

export default function projects() {

  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={projectstyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        Projects
      </motion.h2>
      <div className={projectstyles.projectsContainer}>
        {projectdetails.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className={projectstyles.projectTile}>
              <img src={project.image} alt={project.tiletitle} />
              <div className={projectstyles.projectOverlay}>
                <h3>{project.tiletitle}</h3>
                <p>{project.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
