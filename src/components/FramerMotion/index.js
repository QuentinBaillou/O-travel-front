
import { motion, useSpring } from 'framer-motion';
import './style.scss';

const squareVariant = {
  hidden: {
   
  },
  visible: {
    x: [0, 100, -100],
    transition: {
      times: [5, 1, 5],
    } 
  }
};

const circleVariant = {
  hidden: {
    y: '-200px',
  },
  visible: {
    y: '0px',
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 100,
    }
  }
};

const Test = () => {
  return (
    <div className="wrapper">
      <motion.div id="square" variants={squareVariant} initial="hidden" animate="visible" drag></motion.div>

      <motion.div id="circle" variants={circleVariant} initial="hidden" animate="visible" drag></motion.div>
    </div>
  );
};

export default Test;
