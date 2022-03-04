import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import menu from './menuData';
import './style.scss';

const Nav = () => {
  const isUserLogged = useSelector((state) => state.authentication.isUserLogged);
  // Local state used to or to not display nav menu, when on tablet resolution and bellow
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className={`nav${active ? '--active' : ''}`}>
      <button
        type="button"
        className="nav__burger-button"
        onClick={handleClick}
      >
        <div />
      </button>
      <ul className="nav__list">
        {menu.map((menuItem) => (
          <li key={menuItem.route}>
            {
              // NavLink from React-router-dom used to style current page link,
              // thanks to its property isActive
            }
            <NavLink
              to={menuItem.route}
              className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
            >
              {menuItem.name}
            </NavLink>
          </li>
        ))}
        {!isUserLogged && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
          >
            Connexion
          </NavLink>
        </li>
        )}
        {isUserLogged && (
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
          >
            Déconnexion
          </NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
