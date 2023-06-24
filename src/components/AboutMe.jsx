import React from 'react'



import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import aboutMeImg from "../assets/logo-updated.png";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";

export default function AboutMe({ name, email, location, availability,brand }) {

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
 
  };

  return (
   
     <Grid container spacing={1} >
        <Grid item xs={12} md={6} >
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
        <Grid item xs={12} md={6}  >
      <motion.div
        className="personalInfo "
        ref={ref}
        initial={{ x: "10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="contentContainer">
          <h4>Nice to meet you</h4>
          <h5>Frontend Web Developer who creates amazing digital experiences!</h5>
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
            <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
              {downloading ? "Contacting..." : "Contact me"}
            </button>{" "}
            <SocialIcons />
          </div>
        </div>
      </motion.div>
    </Grid>
  </Grid>

  )
}
