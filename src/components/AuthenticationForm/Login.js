import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'src/actions/authenticationActions';
import Input from './Input';

import './style.scss';

const Login = ({ handleChange }) => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const errorState = useSelector((state) => state.authentication.errorState);
  const errorMessage = useSelector((state) => state.authentication.errorMessage);
  const isUserLogged = useSelector((state) => state.authentication.isUserLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redirection after successfully logged, using useNavigate hook from react-router-dom
  useEffect(() => {
    if (isUserLogged) {
      navigate('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <form className="authentication-form" onSubmit={handleSubmit}>
      { errorState && <p className="authentication-form__error-message">{errorMessage}</p>}
      <Input
        handleChange={handleChange}
        label="Email"
        name="email"
        value={email}
        firstInput
      />
      <Input
        handleChange={handleChange}
        label="Mot de passe"
        name="password"
        value={password}
      />
      {
        // Forgotten password ok if needed. Not implemented because no handle in backend
        /* <Link
        to="/login/forgotten-password"
        className="authentication-form__link"
        >Mot de passe oublié
        </Link> */
      }
      <Link
        to="/inscription"
        className="authentication-form__link"
      >Vous voulez vous inscrire? C'est ici
      </Link>
      <button type="submit" className="authentication-form__submit">Connexion</button>
    </form>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Login;
