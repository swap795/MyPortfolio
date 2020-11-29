import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animation';

const LearnMore = () => {
   return(
      <motion.div 
         variants={ pageAnimation } 
         initial="hidden" 
         animate="show"
         exit="exit" 
      >
         <h2>Learn More</h2>
      </motion.div>
   );
};

export default LearnMore;