import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'src/actions/authenticationActions';
import './style.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.authentication.isUserLogged);
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
        {!logged && (
          <>
            <li>
              <NavLink
                to="/inscription"
                className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
              >
                Inscription
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
              >
                Connexion
              </NavLink>
            </li>
          </>
        )}
        {logged && (
          <>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'nav__link--active' : 'nav__link')}
              >
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="nav__link"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Déconnexion
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
