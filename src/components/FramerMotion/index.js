
import { motion, useSpring } from 'framer-motion';
import './style.scss';

const squareVariant = {
  hover: {
    scale: 1.5,
  },
  pressed: {
    scale: 0.5,
  },
  rest: {
    scale: 1,
  },
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
      <motion.div id="square" variants={squareVariant} whileHover="hover" whileTap="pressed" initial="rest" drag></motion.div>

      <motion.div id="circle" variants={circleVariant} initial="hidden" animate="visible" drag></motion.div>
    </div>
  );
};

export default Test;
