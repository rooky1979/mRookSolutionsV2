"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { projectdetails } from "projectdetails";
import projectstyles from "../../styles/Project.module.css";
import { motion } from "framer-motion";

export default function project({params}) {
    const {title, tiletitle, date, tagline, languages, description, dexcription1, description2, description3, description4} = projectdetails;

  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={projectstyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        Project {params.id}
      </motion.h2>

    </>
  );
}

