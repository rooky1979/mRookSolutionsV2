"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { projectdetails } from "/projectdetails";
import projectstyles from "../../styles/Project.module.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import PhotoModel from "../../components/PhotoModel";

/* add in a link to the github repo and a go back button */

export default function Project({ params }) {
  const [projectData, setprojectData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    const project = projectdetails.find((p) => p.id.toString() === params.id);

    if (project) {
      console.log("Project found:", project);
      setprojectData(project);
    } else {
      console.log("Project not found");
    }
  }, [params.id]);

  const openModel = (imageUrl) => {
    setCurrentPhoto(imageUrl);
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setCurrentPhoto(null);
    setIsModalOpen(false);
  };

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
        <motion.h2 className={projectstyles.projecttagline}>
          {projectData?.tagline}
        </motion.h2>

        <div className={projectstyles.projectImageContainer}>
          <motion.img
          onClick={() => openModel(projectData?.image)}
            src={projectData?.image}
            alt={projectData?.title}
            className={projectstyles.projectImage}
            initial={{ opacity: 0, y:-25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          />
        </div>
        <motion.p className={projectstyles.projectdate}>
          <strong>Date:&nbsp;</strong>
          {projectData?.date}
        </motion.p>
        <motion.p className={projectstyles.projectlanguages}>
          <strong>Stack:&nbsp;</strong>{projectData?.languages}
        </motion.p>
{/*         <motion.p className={projectstyles.projectlanguages}>
        <a className={projectstyles.sitelink} href={projectData?.githublink} rel="noopener noreferrer" target="_blank">Link to code on Github</a>
        </motion.p> */}
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
        <motion.p className={projectstyles.sitelinktext}>
        <a className={projectstyles.sitelink} href={projectData?.githublink} rel="noopener noreferrer" target="_blank">Link to code on Github</a>
        </motion.p>
        {projectData?.siteflag ? (<motion.p className={projectstyles.sitelinktext}>
          This app is live and can be found&nbsp;<Link className={projectstyles.sitelink} href={projectData?.sitelink} rel="noopener noreferrer" target="_blank">here</Link>
        </motion.p>) : (<motion.p className={projectstyles.sitelinktext}></motion.p>)}
        <Link href="/projects">
        <motion.button className={projectstyles.backButton}>Back to Projects</motion.button>
        </Link>
        {isModalOpen && (
        <PhotoModel imageUrl={currentPhoto} onClose={closeModel} />
      )}
      </motion.div>
    </>
  );
}
