import React from 'react'
import {Box } from "@mui/material";
import Icon from '../components/Icon'
import {icons} from "../constants/Icons.js"


function Skills() {
  return (
         <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {icons.map((icon, i) => {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
          })}
        </Box>
  )
}

export default Skills