import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import aboutMeImg from "../assets/logo-updated.png";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";

export default function AboutMe({
  name,
  email,
  location,
  availability,
  brand,
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <motion.div
          className="personalImage "
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
      </Grid>
      <Grid item xs={12} md={6}>
        <motion.div
          className="personalInfo "
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>
              I'm Oussama, a Full-stack developer with a passion for crafting
              innovative solutions using the MERN technology (MongoDB,
              ExpressJs, React, NodeJS).With a background in mechanical
              engineering, my journey into the world of software development
              began with a transformative six months bootcamp at{" "}
              <a
                href="https://www.ironhack.com"
                target="_blank"
                rel="noreferrer"
                className="ironhack-link"
              >
                Ironhack
              </a>
              , my passion for coding and technology led me to make the switch
              and embrace the world of programming.
            </h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className=" info">
                <span>Name:</span>
                <p>{name}</p>

                <div className=" info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>

              <div className="info">
                <span>Location:</span>
                <p>{location}</p>

                <div className=" info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <Link to="/contact">
                <button className="btn">Contact me</button>
              </Link>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </Grid>
    </Grid>
  );
}
