import React from "react";
import { Box } from "@mui/material";
import Icon from "../components/Icon";
import { icons } from "../constants/Icons.js";
import { motion } from 'framer-motion';

 //temporary solution for the animation of icons still need to be adjusted

function Skills() {

  return (
    <Box
      sx={{
         display: "flex",
         flexDirection: "row",
        alignItems: "center",
        animation: "swipe var(--speed) linear infinite ",
        "@keyframes swipe": {
          "0%": {
            transform: "translate(50%)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
       gap: "20px" /* Adjust the space between icons as needed */,
       
      }}
    >       
        {icons.map((icon) => (
          <Icon key={icon.id} name={icon.name} src={icon.src} />
        ))}
    </Box>
  );
}

export default Skills;

 