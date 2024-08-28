"use client";
import React from "react";
import Navbar from "../components/Navbar";
import expStyles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

export default function experience() {
  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={expStyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        Experience/Skills
      </motion.h2>
      <motion.div
        className={expStyles.listContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <motion.div className={expStyles.listBox}>
          <motion.ul className={expStyles.list}>
            <li className={expStyles.listTitle}>
              Current Employment: Deloitte SAP Consultant.
            </li>
            <li className={expStyles.listDate}>Nov 2021 - Current.</li>
            <li className={expStyles.listItem}>
              Part of the Technical team for creating, enhancing, and modifying
              SAP products for clients in their build.
            </li>
            <li className={expStyles.listItem}>
              Involved in client-based projects for the conversion of SAP ECC to
              SAP S/4HANA.
            </li>
            <li className={expStyles.listItem}>
              Certified the fundamentals and concepts of ABAP programming
              language.
            </li>
            <li className={expStyles.listItem}>
              Competant with the fundamentals and concepts of Fiori Elements and
              SAPUI5.
            </li>
            <li className={expStyles.listItem}>
              Responsible for generating Functional and Technical
              specifications.
            </li>
            <li className={expStyles.listItem}>
              Responsible for the finding and fixing of defects.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div
        className={expStyles.listContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <motion.div className={expStyles.listBox}>
          <motion.ul className={expStyles.list}>
            <li className={expStyles.listTitle}>Project Management.</li>
            <li className={expStyles.listItem}>
              Project Manager for multiple projects from simple to high profile
              spanning over 5 years in the pharmaceutical industry.
            </li>
            <li className={expStyles.listItem}>
              Leadership; A great leader can push people up to where they want
              to go and pull people up to where they need to be. I lead by
              example putting in the work alongside.
            </li>
            <li className={expStyles.listItem}>
              Excellent ability to multi-task, using the time effectively in
              order to get the job done to meet the timelines agreed.
            </li>
            <li className={expStyles.listItem}>
              Quick and efficient, but never compromising the quality and
              accuracy of the project. Getting it right first time is important.
            </li>
            <li className={expStyles.listItem}>
              Thrives under pressure, doesn’t crumble and begs to be challenged.
            </li>
            <li className={expStyles.listItem}>
              Great rapport in dealing with customers, both internally and
              externally.
            </li>
            <li className={expStyles.listItem}>Great attention to detail.</li>
            <li className={expStyles.listItem}>
              Vast experience with writing business cases and proposals.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div
        className={expStyles.listContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <motion.div className={expStyles.listBox}>
          <motion.ul className={expStyles.list}>
            <li className={expStyles.listTitle}>
              Teamwork, Training & Decisions
            </li>
            <li className={expStyles.listItem}>
              A teachable individual that is always striving to learn more and
              be the best I can be.
            </li>
            <li className={expStyles.listItem}>
              Not above my station and understand my capabilities. There is no
              ego.
            </li>
            <li className={expStyles.listItem}>
              A respected and reliable team member.
            </li>
            <li className={expStyles.listItem}>
              A team player, but also competent to work alone using initiative,
              thinking “outside the box”.
            </li>
            <li className={expStyles.listItem}>
              Capable of decision making with respect to the quality of systems.
            </li>
            <li className={expStyles.listItem}>
              Analytical thinker and problem solver. 16 years in Analytical
              Chemistry taught me that.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div
        className={expStyles.listContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <motion.div className={expStyles.listBox}>
          <motion.ul className={expStyles.list}>
            <li className={expStyles.listTitle}>
              Communication & Organisation
            </li>
            <li className={expStyles.listItem}>
              Communication with others is excellent.
            </li>
            <li className={expStyles.listItem}>
              Excellent organisational skills – workload is efficiently
              prioritized.
            </li>
            <li className={expStyles.listItem}>
              Builds relationships with other internal and external customers
              for smooth running and repeat business
            </li>
            <li className={expStyles.listItem}>
              People person and friendly persona.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div
        className={expStyles.listContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <motion.div className={expStyles.listBox}>
          <motion.ul className={expStyles.list}>
            <li className={expStyles.listTitle}>Documentation</li>
            <li className={expStyles.listItem}>
              Vast experience in writing and reviewing reports, manuals,
              standard operating procedures, various plans, protocols and more
              to meet FDA 21 CFR Part 11 Compliance.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <br/>
    </>
  );
}
