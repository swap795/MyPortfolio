import React from "react";
import pro_pic from "../images/pro-pic.JPEG";
import Timeline from '../components/Timeline';

// framer motion
import { motion } from 'framer-motion';

// styles
// import styled from 'styled-components';
import { AboutStyle, DescriptionStyle, HideStyle, ImgStyle } from '../styles';
import { pageAnimation, titleAnimation, photoAnimation } from "../animation";

import Wave from './Wave';



/************************************************************ 
   MAIN RENDER
************************************************************/
const Home = () => {

   /*
   The code below is basically doing this
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }}>Welcome!</motion.h2>
   */

   return (
      <motion.div 
         variants={ pageAnimation } 
         initial="hidden" 
         animate="show"
         exit="exit" 
      >
         <AboutStyle> 
            <DescriptionStyle>
               <HideStyle>
                  <motion.h2 variants={ titleAnimation }>Welcome</motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2 variants={ titleAnimation }>to my</motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2 variants={ titleAnimation }><span>Portfolio!</span></motion.h2>
               </HideStyle>
            </DescriptionStyle>
            <ImgStyle>
               <motion.img variants={ photoAnimation } src={ pro_pic } alt=""/>
            </ImgStyle>
            <Wave />
         </AboutStyle>
         <div style={{ background: "linear-gradient(#1b1b1b, #4f4e4e)" }}>
            <Timeline />
         </div>
      </motion.div>
      
   );
}

export default Home;