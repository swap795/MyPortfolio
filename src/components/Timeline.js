import React from "react";
import { Link } from "react-router-dom";

// import { AboutStyle } from '../styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ScrollAnimation from '../components/ScrollAnimation';
import { timelineAnimation, rightIconAnimation, leftIconAnimation, photoAnimation, scrollReveal, fadeAnimation } from '../animation';

// images
import gradCap from '../images/grad-cap.png';
import coding from '../images/programming.png';
import cplusplus from '../images/cplusplus.png';
import java from '../images/java.png';
import cpu from '../images/cpu.png';
import js from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css.png';
import reactJS from '../images/reactJS.png';



// the whole container
const TimelineContainer = styled(motion.div)`
   overflow: hidden;
   h1{
      padding-top: 2rem;
      padding-bottom: 5rem;
      text-align: center;
      color: #ed6663;
      font-size: 4rem;
   }
`;

// Circle on the line
// const Circle = styled(motion.div)`
//    content: '';
//    position: relative;
//    width: 25px;
//    height: 25px;
//    background-color: white;
//    border: 4px solid #FF9F55;
//    top: 15px;
//    border-radius: 50%;
//    z-index: 1;
// `;

// Vertical line
const LineStyle = styled(motion.div)`
   position: relative;
   max-width: 1200px;
   margin: 0 auto;
   padding-top: 3rem;
   &:after{
      content: ' ';
      position: absolute;
      width: 10px;
      background-color: #086972;
      top: 0;
      bottom: 0;
      left: 53.3%;
      /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
   }
   h2{
      font-size: 3rem;
   }
   p{
      padding: .2rem .2rem;
      color: black;
      font-size: 1rem;
   }
   h4{
      padding-bottom: 1rem;
   }
`;

const LeftIcons = styled(motion.div)`
   img{
      position: relative;
      left: -60%;
      /* margin-right: -45px; */
      width: 90px;
      height: 90px;
      background-size: cover;
      background-position: center;
      border: solid 5px #5bafb7;
      border-radius: 50px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 2;
   }
`;

const RightIcons = styled(motion.div)`
   img{
      position: relative;
      left: -60%;
      /* margin-right: -45px; */
      width: 90px;
      height: 90px;
      background-size: cover;
      background-position: center;
      border: solid 5px #5bafb7;
      border-radius: 50px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 2;
   }
`;

// Container around the content
const LeftContainer = styled(motion.div)`
   padding: 1rem 4rem;
   margin-left: 0;
   position: relative;
   left: 10%auto;
   background-color: inherit;
   width: 50%;
   &:before{
      content: " ";
      height: 0;
      position: absolute;
      top: 2.6rem;
      width: 0;
      z-index: 1;
      right: 3.4rem;
      border: medium solid #be8888;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #be8888;
   }
`;

// Container around the content
const RightContainer = styled(motion.div)`
   padding: 10px 5rem;
   position: relative;
   left: 50%auto;
   background-color: inherit;
   width: 50%;
   &:before{
      content: " ";
      height: 0;
      position: absolute;
      top: 2.2rem;
      width: 0;
      z-index: 1;
      left: 4.36rem;
      border: medium solid #be8888;
      border-width: 10px 10px 10px 0;
      border-color: transparent #be8888 transparent transparent;
   }
`;

// the Content
const Content = styled(motion.div)`
   padding: 20px 30px;
   background-color: #be8888;
   position: relative;
   border-radius: 2rem;
   img{
      width: 60px;
      height: 60px;
      background-size: cover;
      background-position: center;
      border: solid 5px #ffffff;
      border-radius: 50px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
   }
   .learnButton{
      font-size: 1.3rem;
      margin-top: 1rem;
      border-radius: 2rem;
      border-color: #222831;
      background-color: #d9adad;
      &:hover{
         background-color: #428b70;
         color: white;
         a{
            color: white;
         }
      }
   }
   a{
      color: black;
      text-decoration: none;
   }
`;

// this container for the content, container and the circle
const Card = styled(motion.div)`
   display: flex;
   padding: 0;
   .line{
      height: 100%auto;
      width: 1rem;
      background-color: #086972;
   }
   .line-rightCard{
      position: relative;
      left: 0;
      height: 100%;
      width: 1rem;
      background-color: #086972;
   }
   h2{
      font-size: 3rem;
   }
   p{
      padding: .2rem .2rem;
      color: black;
      font-size: 1rem;
   }
   h4{
      padding-bottom: 1rem;
   }
`;



const Timeline = () => {
   const [element1, control1] = ScrollAnimation();
   const [element2, control2] = ScrollAnimation();
   const [element3, control3] = ScrollAnimation();
   const [element4, control4] = ScrollAnimation();
   const [element5, control5] = ScrollAnimation();
   const [element6, control6] = ScrollAnimation();
   const [element7, control7] = ScrollAnimation();
   const [element8, control8] = ScrollAnimation();
   const [element9, control9] = ScrollAnimation();
   const [element10, control10] = ScrollAnimation();

   return (
      <div>
         <TimelineContainer>
            <motion.h1
               ref={ element1 }
               variants={ scrollReveal } 
               initial="hidden" 
               animate={ control1 }
            >
               Timeline
            </motion.h1> 
            {/* <LineStyle 
               variants={ fadeAnimation }
               ref={ element10 } 
               initial="hidden" 
               animate={ control10 }
            > */}
               {/* 1 */}
               <Card
                  ref={ element2 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control2 }
               >
                  <LeftContainer style={{ left: "0%" }}> 
                     <Content variants={ photoAnimation }>
                        <motion.h4><em>2016</em></motion.h4>
                        <motion.h5>Where it all started</motion.h5>
                        <motion.p>High School 2016 (senior year).</motion.p>
                        <motion.p>I took an introductory class about Computer Engineering.</motion.p>
                     </Content>
                  </LeftContainer>
                  <motion.div 
                     variants={ timelineAnimation } 
                     className="line">
                  </motion.div>
                  <LeftIcons variants={ leftIconAnimation }>
                        <img style={{ backgroundColor: "#bcbbbb" }} src={ gradCap } alt=""/>
                  </LeftIcons>
               </Card>
               {/* 2 */}
               <Card
                  ref={ element3 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control3 }
               >
                  <RightContainer style={{ left: "50%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2016</em></h4>
                        <h5>Decided my Major</h5>
                        <ul>
                           <li>Majoring in Computer Engineering</li>
                           <li>My first course was Procedural Programming in C++</li>
                        </ul>
                     </Content>
                  </RightContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <RightIcons variants={ rightIconAnimation }>
                     <img src={ coding } alt=""/>
                  </RightIcons>
               </Card>
               {/* 3 */}
               <Card
                  style={{ left: "0%" }}
                  ref={ element4 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control4 }
               >
                  <LeftContainer style={{ left: "0%" }}>
                     <Content variants={ photoAnimation }> 
                        <h4><em>2017</em></h4>
                        <h5>My First game?</h5>
                        <p>I took a course on Object Oriented Programming where I built a Moon Lander game. I Utillized object-oriented paradigm and algorithm formulations to implement functionality for the lander </p>
                     </Content>
                  </LeftContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <LeftIcons variants={ leftIconAnimation }>
                        <img src={ cplusplus } alt=""/>
                  </LeftIcons>
               </Card>
               {/* 4 */}
               <Card
                  ref={ element5 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control5 }
               >
                  <RightContainer style={{ left: "50%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2017</em></h4>
                        <h5>My First App</h5>
                        <p>Developed a Board Game Scanner App for Android in Java.</p>
                        <p>This scanner app could scan the barcode of a given board game and display info such as: Name, Picture, available in stock and Price</p>
                     </Content>
                  </RightContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <RightIcons variants={ rightIconAnimation }>
                     <img src={ java } alt=""/>
                  </RightIcons>
               </Card>
               {/* 5 */}
               <Card
                  ref={ element6 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control6 }
               >
                  <LeftContainer style={{ left: "0%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2018</em></h4>
                        <h5>Hardware?</h5>
                        <p>Part of a team that developed a Home Alarm System.</p>
                        <p>This Home Alarm System is a security feature to put in Homes and also detected motion near the system.</p>
                     </Content>
                  </LeftContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <LeftIcons variants={ leftIconAnimation }>
                        <img src={ cpu } alt=""/>
                  </LeftIcons>
               </Card>
               {/* 6 */}
               <Card
                  ref={ element7 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control7 }
               >
                  <RightContainer style={{ left: "50%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2019</em></h4>
                        <h5>Discovered Passion</h5>
                        <div style={{ display: 'flex' }}>
                           <img src={ html } alt=""/>
                           <img src={ css } alt=""/>
                           <img src={ js } alt=""/>
                        </div>
                        <br/>
                        <p>My journey towards Web Development began with simple HTML, CSS and JavaScript.</p>
                     </Content>
                  </RightContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <RightIcons variants={ rightIconAnimation }>
                     <img src={ js } alt=""/>
                  </RightIcons>
               </Card>
               {/* 7 */}
               <Card
                  ref={ element8 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control8 }
               >
                  <LeftContainer style={{ left: "0%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2020</em></h4>
                        <h5>Sorting Visualizer</h5>
                        <p>Created a react application for sorting visualizer.</p>
                     </Content>
                  </LeftContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <LeftIcons variants={ rightIconAnimation }>
                     <img src={ reactJS } alt=""/>
                  </LeftIcons>
               </Card>
               {/* 8 */}
               <Card   
                  ref={ element9 }
                  variants={ scrollReveal } 
                  initial="hidden" 
                  animate={ control9 }
               >
                  <RightContainer style={{ left: "50%" }}>
                     <Content variants={ photoAnimation }>
                        <h4><em>2020</em></h4>
                        <h5>My Portfolio</h5>
                        <p>I created my Portfolio from the scratch without using a template. This website is built in react.</p>
                        <button className="learnButton"><Link to="/learn-more">Learn More</Link></button>
                     </Content>
                  </RightContainer>
                  <motion.div 
                     variants={ timelineAnimation } className="line">
                  </motion.div>
                  <RightIcons variants={ rightIconAnimation }>
                     <img src={ reactJS } alt=""/>
                  </RightIcons>
               </Card>
            {/* </LineStyle> */}
         </TimelineContainer>
      </div>
   );
}

export default Timeline;