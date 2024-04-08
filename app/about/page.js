"use client";
import React from "react";
import Navbar from "../components/Navbar";
import aboutStyles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function about() {
  return (
    <>
      <Navbar isHomepage={true} />
      <motion.h2
        className={aboutStyles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
      >
        About
      </motion.h2>
      <div className={aboutStyles.aboutcontainer}>
        <motion.div
          className={aboutStyles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <img src="/me.jpeg" alt="Me at Stonehenge" />
        </motion.div>
        <motion.div
          className={aboutStyles.textcontainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <p className={aboutStyles.text}>
            I spent 17 years in the world of Analytical Chemistry and various
            pharmaceutical companies ranging from OTC medicines to supplements,
            veterinarian, prescription, and antibiotics before moving to
            Validation. It was there installing, qualifying, and validating
            computerised systems and equipment where I found my love and passion
            of IT.
          </p>
          <br />
          <p className={aboutStyles.text}>
            In 2014 during a big project of installing, upgrading, and qualifying
            HPLCs, and their PCs I wished I had gone into IT instead of science,
            but telling myself not to do anything about it with things like "I'm
            too old", or "I can't afford to go to University, I have a mortgage
            to pay". I recognise now exactly those "justifications" for what
            they were..... Excuses and Fear.
          </p>
          <br />
          <p className={aboutStyles.text}>
            In 2017 after some self-reflection came to pass, I decided to go
            for it. No more self-justifications, rationalisations, and excuses.
            I enrolled at AUT full-time in a BSc Computer and Information
            Sciences degree majoring in Software Development, and I have never
            looked back. To switch careers at 39 was one of the scariest things
            I have ever done. The fear of the unknown was intense. Self doubt
            and imposter syndrome were rampant. "What if I fail?" But I seem to
            operate under pressure best and when I want something, I go for it.
            Hey, if I'm going to walk on thin ice, I may as well tap dance right?
          </p>
          <br />
          <p className={aboutStyles.text}>
            Since graduating in 2021 with a GPA of 7.2 (A-) and many
            interviews/rejections later, I landed my first job at Deloitte on
            the learning track as a Consultant/Specialist in SAP ABAP
            development and on course to become a full-stack developer (SAP
            Fiori, CAP, RAP, CPI, etc.) where I currently reside and building
            little personal projects in my own time to keep learning new skills and stay relevant.
          </p>
          <br />
          <p className={aboutStyles.text}>
            My fears of being too old I know now were unjust and untrue. What I
            have from my previous career is a wealth of transferable skills and
            life experience. I came out of university to my job knowing that in
            order to progress in this new career, I must stay humble. Without
            ego. So that I can listen and learn. To be open minded to new ideas
            so that I remain teachable so I can continue to grow. My fears
            turned out to be some of my greatest assets.
          </p>
          <br />
          <p className={aboutStyles.text}>
            I live my life by some simple values that I believe are paramount in
            both professional and personal life. Honesty, loyalty, integrity,
            accountability, and being of service. Living by these values earns
            trust which is the foundation of any relationship both business and
            personal.
          </p>
          <br />
          <p className={aboutStyles.text}>
            I laugh, I joke. I stay child-like with curiousity and wonder, but not childish. I surf, I
            skate, I play pinball and retro games. I love cinema and spending
            time with family and friends. I love life.
          </p>
          <br />
          <p className={aboutStyles.text}>
            But don't let my cheerful demeanour fool you. When it's time to get
            down to business, I am a man of sheer will and determination. I get
            things done. I say what I'll do and do what I say.
          </p>
        </motion.div>
        <motion.div
          className={aboutStyles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <img src="/family.jpeg" alt="Family at Disney" />
        </motion.div>
      </div>
    </>
  );
}
