// == Import
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import './style.scss';
import HeaderSun from 'src/assets/svg/header_sun.png';

// == Composant
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <img className="header_sun" src={HeaderSun} /><h1 className="header__title"><Link to="/">'Travel</Link></h1>
      <Nav active={isActive} setIsActive={setIsActive} />
    </header>
  );
};

// == Export
export default Header;
