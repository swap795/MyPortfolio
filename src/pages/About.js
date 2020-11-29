import React from "react";
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
// import { AboutStyle } from '../styles';

import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';

const About = () => {
   return (
      <motion.div 
      exit="exit" 
      variants={ pageAnimation } 
      initial="hidden" 
      animate="show"
      >
         <AboutMe />
         <Timeline />
      </motion.div>
   );
}

export default About;