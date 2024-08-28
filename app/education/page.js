"use client"
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
        <div>
            {year_1.map((paper, index) => (
                <Papers
                key={index}
                year={paper.year}
                averageGrade={paper.averageGrade}
                papers={paper.papers} />
            ))}
        </div>
        <div>
            {year_2.map((paper, index) => (
                <Papers
                key={index}
                year={paper.year}
                averageGrade={paper.averageGrade}
                papers={paper.papers} />
            ))}
        </div>
        <div>
            {year_3.map((paper, index) => (
                <Papers
                key={index}
                year={paper.year}
                averageGrade={paper.averageGrade}
                papers={paper.papers} />
            ))}
        </div>



        </>
    )

}