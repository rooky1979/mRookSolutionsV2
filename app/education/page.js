"use client";
import React from "react";
import Navbar from "../components/Navbar";
import educationStyles from "../styles/Education.module.css";
import { motion } from "framer-motion";
import Papers from "../components/Papers";
import { year_1 } from "@/education1";
import { year_2 } from "@/education2";
import { year_3 } from "@/education3";

export default function education() {
  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={educationStyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        Education
      </motion.h2>
      <motion.div
        className={educationStyles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        <motion.div className={educationStyles.imagecontainer}>
          <img src="/ABAPcert.png" alt="ABAP Certification" />
        </motion.div>
        <motion.div className={educationStyles.textcontainerCert}>
          <p className={educationStyles.textCert}>
            <strong>
              SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50
            </strong>
          </p>
        </motion.div>
      </motion.div>
      <br />
      <motion.div
        className={educationStyles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        <motion.div className={educationStyles.textcontainerCert}>
          <p className={educationStyles.textCert}>
            <strong>
              SAP Certified Application Associate - Business Process Integration
              with SAP S/4HANA 2020
            </strong>
          </p>
        </motion.div>
        <motion.div className={educationStyles.imagecontainer}>
          <img src="/certification.png" alt="SAP Certification" />
        </motion.div>
      </motion.div>
      <br />
      <motion.div
        className={educationStyles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        <motion.div className={educationStyles.imagecontainer}>
          <img src="/AUT2.jpg" alt="AUT" />
        </motion.div>
        <motion.div className={educationStyles.textcontainer}>
          <p className={educationStyles.text}>
            <strong>School:&nbsp;</strong>Auckland University of Technology
          </p>
          <p className={educationStyles.text}>
            <strong>Course:&nbsp;</strong>Bachelor Computer and Information
            Science
          </p>
          <p className={educationStyles.text}>
            <strong>Major:&nbsp;</strong>Software Development
          </p>
          <p className={educationStyles.text}>
            <strong>Grade:&nbsp;</strong>GPA 7.2 (A-)
          </p>
          <p className={educationStyles.text}>
            <strong>Date:&nbsp;</strong>February 2018 - June 2021
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        {year_1.map((paper, index) => (
          <Papers
            key={index}
            year={paper.year}
            averageGrade={paper.averageGrade}
            papers={paper.papers}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        {year_2.map((paper, index) => (
          <Papers
            key={index}
            year={paper.year}
            averageGrade={paper.averageGrade}
            papers={paper.papers}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        {year_3.map((paper, index) => (
          <Papers
            key={index}
            year={paper.year}
            averageGrade={paper.averageGrade}
            papers={paper.papers}
          />
        ))}
      </motion.div>
      <br />
      <motion.div
        className={educationStyles.container}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.5 }}
      >
        <motion.div className={educationStyles.textcontainerFurther}>
          <p className={educationStyles.textCert}>
            <strong>
              Further Education/Courses
            </strong>
          </p>
          <p className={educationStyles.textCert}>
          Flutter & Dart - The Complete Flutter App Development Course with Paulo Dichone
          </p>
          <p className={educationStyles.textCert}>
          MERN Stack Front To Back: Full Stack React, Redux & Node.js with Brad Traversy
          </p>
        </motion.div>

      </motion.div>
    </>
  );
}
