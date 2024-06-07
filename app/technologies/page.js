"use client"
import React from "react";
import Navbar from "../components/Navbar";
import techStyles from '../styles/Technologies.module.css';
import { tech } from '/technologies';
import { motion } from "framer-motion";

export default function technologies() {

    return (
        <>
        <Navbar isHomepage={true} />
        <motion.h2
        className={techStyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        Technologies
      </motion.h2>
        <motion.div 
        className={techStyles.grid}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}>
      {tech.map(({ id, technology, image, level }) => (
        <div key={id} className={techStyles.card}>
          <div className={techStyles.cardInner}>
            <div className={techStyles.cardFront}>
              <img src={image} alt={technology} className={techStyles.image} />
            </div>
            <div className={techStyles.cardBack}>
              <div>
                <h3>{technology}</h3>
                <p><strong>Level:&nbsp;</strong>{level}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
        </>
    )
}