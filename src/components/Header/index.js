// == Import
import { useState } from 'react';
import Nav from './Nav';
import './style.scss';

// == Composant
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <h1 className="header__title"><span>☀️</span>'Travel</h1>
      <Nav isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
};

// == Export
export default Header;
