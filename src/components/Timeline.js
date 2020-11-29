import React from "react";
import { Link } from "react-router-dom";

// import { AboutStyle } from '../styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ScrollAnimation from '../components/ScrollAnimation';
import { photoAnimation, scrollReveal } from '../animation';


// the whole container
const TimelineContainer = styled(motion.div)`
   h1{
      padding-top: 2rem;
      padding-bottom: 5rem;
      text-align: center;
      color: #ed6663;
      font-size: 4rem;
   }
`;

// Circle on the line
const Circle = styled(motion.div)`
   content: '';
   position: relative;
   width: 25px;
   height: 25px;
   background-color: white;
   border: 4px solid #FF9F55;
   top: 15px;
   border-radius: 50%;
   z-index: 1;
`;

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
      background-color: #23d997;
      top: 0;
      bottom: 0;
      left: 50.5%;
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

// Container around the content
const LeftContainer = styled(motion.div)`
   padding: 10px 40px;
   position: relative;
   background-color: inherit;
   width: 50%;
   &:before{
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid #bc7777;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #bc7777;
   }
`;

// Container around the content
const RightContainer = styled(motion.div)`
   padding: 10px 40px;
   position: relative;
   background-color: inherit;
   width: 50%;
   &:before{
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid #bc7777;
      border-width: 10px 10px 10px 0;
      border-color: transparent #bc7777 transparent transparent;
   }
`;

// the Content
const Content = styled(motion.div)`
   padding: 20px 30px;
   background-color: #bc7777;
   position: relative;
   border-radius: 6px;
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
`;

// const timelineAnimation = {
// };

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
            <LineStyle>
               <Card>
                  <LeftContainer 
                     style={{ left: "0%" }}
                     ref={ element2 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control2 }
                  >
                     <Content variants={ photoAnimation }>
                        <motion.h4><em>2016</em></motion.h4>
                        <h4><span>Where it all started</span></h4>
                        <p>High School 2016 (senior year).</p>
                        <p>I took an introductory class about Computer Engineering.</p>
                     </Content>
                  </LeftContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <RightContainer 
                     style={{ left: "50%" }}
                     ref={ element3 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control3 }
                  >
                     <Content variants={ photoAnimation }>
                        <h4><em>2016</em></h4>
                        <h4><span>Decided my Major</span></h4>
                        <ul>
                           <li>Majoring in Computer Engineering</li>
                           <li>My first course was Procedural Programming in C++</li>
                        </ul>
                     </Content>
                  </RightContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <LeftContainer 
                     style={{ left: "0%" }}
                     ref={ element4 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control4 }
                  >
                     <Content variants={ photoAnimation }> 
                        <h4><em>2017</em></h4>
                        <h4><span>My First game?</span></h4>
                        <p>I took a course on Object Oriented Programming where I built a Moon Lander game. I Utillized object-oriented paradigm and algorithm formulations to implement functionality for the lander </p>
                     </Content>
                  </LeftContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <RightContainer 
                     style={{ left: "50%" }}
                     ref={ element5 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control5 }
                  >
                     <Content variants={ photoAnimation }>
                        <h4><em>2017</em></h4>
                        <h4><span>My First App</span></h4>
                        <p>Developed a Board Game Scanner App for Android in Java.</p>
                        <p>This scanner app could scan the barcode of a given board game and display info such as: Name, Picture, available in stock and Price</p>
                     </Content>
                  </RightContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <LeftContainer 
                     style={{ left: "0%" }}
                     ref={ element6 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control6 }
                  >
                     <Content variants={ photoAnimation }>
                        <h4><em>2018</em></h4>
                        <h4><span>Hardware?</span></h4>
                        <p>Part of a team that developed a Home Alarm System.</p>
                        <p>This Home Alarm System is a security feature to put in Homes and also detected motion near the system.</p>
                     </Content>
                  </LeftContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <RightContainer 
                     style={{ left: "50%" }}
                     ref={ element7 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control7 }
                  >
                     <Content variants={ photoAnimation }>
                        <h4><em>2020</em></h4>
                        <h4><span>Sorting Visualizer</span></h4>
                        <p>Created a react application for sorting visualizer.</p>
                     </Content>
                  </RightContainer>
                  <Circle></Circle>
               </Card>
               <Card>
                  <LeftContainer 
                     style={{ left: "0%" }}
                     ref={ element8 }
                     variants={ scrollReveal } 
                     initial="hidden" 
                     animate={ control8 }
                  >
                     <Content variants={ photoAnimation }>
                        <h4><em>2020</em></h4>
                        <h4><span>My Portfolio</span></h4>
                        <p>I created my Portfolio from the scratch without using a template. This website is built in react.</p>
                        <button className="learnButton"><Link to="/learn-more">Learn More</Link></button>
                     </Content>
                  </LeftContainer>
                  <Circle></Circle>
               </Card>
            </LineStyle>
         </TimelineContainer>
      </div>
   );
}

export default Timeline;