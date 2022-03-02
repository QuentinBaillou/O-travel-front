
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './style.scss';

const Example = () => {

const variant = {
  hover: {
    scale: 1.2,
    originX: -1,
    originY: -1,
  },

  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
}

return(
<motion.div className="press_start" variants={variant} initial="hidden" animate="visible" whileHover="hover">Press Start</motion.div>
);
};

export default Example;
