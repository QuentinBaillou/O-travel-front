// == Import
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import './style.scss';

// == Composant
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <h1 className="header__title"><Link to="/"><span>☀️</span>'Travel</Link></h1>
      <Nav active={isActive} setIsActive={setIsActive} />
    </header>
  );
};

// == Export
export default Header;
