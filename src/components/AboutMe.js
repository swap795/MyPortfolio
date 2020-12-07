import React, { useState } from "react";
import styled from 'styled-components';

// import { AboutStyle } from '../styles';
// import styled from 'styled-components';
import { motion } from 'framer-motion';

import cplusplus from '../images/cplusplus.png';
import java from '../images/java.png';
import cpu from '../images/cpu.png';
import js from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css.png';
import reactJS from '../images/reactJS.png';
import python from '../images/python.png';
import nodejs from '../images/nodejs.png';
import mysql from '../images/mysql.png';
import vhdl from '../images/vhdl.jpeg';

// for PDF
import PDF from '../components/PDF';

const SkillsStyle = styled(motion.div)`
   display: grid;
   grid-template-columns: 10rem 10rem 10rem;
   img{
      width: 110px;
      height: 110px;
      background-size: cover;
      background-position: center;
      border: solid 5px #5bafb7;
      border-radius: 4rem;
}`;

const AboutMe = () => {
   const viewResume = () => {
      <PDF />
   };
   
   return (
      <motion.div>
         <div className="resume">
            <div className="header">
               <h4>My name is Swapnil Thapa</h4>
               <p>Motivated to apply the principle of <span>learn to be curios</span> by educating outside of school work.</p>
            </div>
            <div className="edcation">
               <p>Studying Computer Engineering at Brigham Young University-Idaho</p>
            </div>
            <SkillsStyle>
               <motion.img src={ cplusplus } alt="c++"/>
               <motion.img src={ java } alt="java"/>
               <motion.img src={ python } alt="python"/>
               <motion.img src={ html } alt="HTML"/>
               <motion.img src={ css } alt="CSS"/>
               <motion.img src={ js } alt="JavaScript"/>
               <motion.img src={ nodejs } alt="Node.js"/>
               <motion.img src={ reactJS } alt="React.js"/>
               <motion.img style={{ background: 'white' }} src={ mysql } alt="MySQL"/>
               <motion.img src={ vhdl } alt="VerilogHDL"/>
            </SkillsStyle>
            <div className="hobbies">

            </div>
            <div>
               <button onClick={ viewResume }>View Resume</button>
            </div>
         </div>
      </motion.div>
   );
}

export default AboutMe;