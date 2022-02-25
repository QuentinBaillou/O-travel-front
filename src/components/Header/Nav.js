import PropTypes from 'prop-types';
import './style.scss';

const Nav = ({ isActive, setIsActive }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={`nav${isActive ? '--active' : ''}`}>
      <button type="button" className="nav__burger-button" onClick={handleClick}><span>+</span></button>
      <ul className="nav__list">
        <li>
          <a href="#" className="nav__link">Accueil</a>
        </li>
        <li>
          <a href="#" className="nav__link">Liste des voyages</a>
        </li>
        <li>
          <a href="#" className="nav__link">Profil</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Nav;
