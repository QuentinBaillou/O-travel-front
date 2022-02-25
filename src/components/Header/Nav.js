import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = ({ active, setIsActive }) => {
  const handleClick = () => {
    setIsActive(!active);
  };
  return (
    <nav className={`nav${active ? '--active' : ''}`}>
      <button
        type="button"
        className="nav__burger-button"
        onClick={handleClick}
      >
        <span>+</span>
      </button>
      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destinations"
            className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
          >
            Liste des voyages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
          >
            Profil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Nav;
