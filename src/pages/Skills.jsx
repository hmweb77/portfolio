import React from "react";
import { Box } from "@mui/material";
import Icon from "../components/Icon";
import { icons } from "../constants/Icons.js";
import { motion } from 'framer-motion';


function Skills() {
  const swipeAnimation = {
    "0%": {
      transform: "translate(100%)",
    },
    "100%": {
      transform: "translate(-100%)",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        animation: "swipe var(--speed) linear infinite ",
        "@keyframes swipe": {
          "0%": {
            transform: "translate(100%)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      }}
    >
      {icons.map((icon) => {
        return <Icon key={icon.id} name={icon.name} src={icon.src} />;
      })}
    </Box>
  //   <motion.div
  //   style={{
  //     display: 'flex',
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   }}
  // >
  //   {icons.map((icon) => (
  //     <motion.div
  //       key={icon.id}
  //       style={{ marginRight: '10px' }}
  //       animate={{ x: ['-100%', '100%'] }}
  //       transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
  //     >
  //       <Icon name={icon.name} src={icon.src} />
  //     </motion.div>
  //   ))}
  // </motion.div>

  );
}

export default Skills;
