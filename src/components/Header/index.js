// == Import
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import './style.scss';
import HeaderSun from 'src/assets/svg/header_sun.png';

import { motion } from 'framer-motion';

// == Composant
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <div className="header_left_part">
        <motion.img className="header_sun" src={HeaderSun} whileHover={{scale: 1.2}} drag /><h1 className="header__title"><Link to="/">'Travel</Link></h1>
      </div>
      <Nav active={isActive} setIsActive={setIsActive} />
    </header>
  );
};

// == Export
export default Header;
