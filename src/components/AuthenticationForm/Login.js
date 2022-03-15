import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, sendForm } from 'src/actions/authenticationActions';

import Desert from 'src/assets/images/postcard/desert.jpg';
import Coast from 'src/assets/images/postcard/coast.jpg';
import Train from 'src/assets/images/postcard/train.jpg';

import Input from './Input';

import './style.scss';

const Login = ({ handleChange }) => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const isFormSend = useSelector((state) => state.authentication.isFormSend);
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
    dispatch(sendForm(false));
  };

  return (

    <>
      <div className="postcards_wrapper">
        <img id="pic1" src={Desert} alt="desert" />
        <img id="pic2" src={Coast} alt="coast" />
        <img id="pic3" src={Train} alt="train" />
      </div>

      <form className="authentication-form" onSubmit={handleSubmit}>
        {(isFormSend && !isUserLogged) && <p className="authentication-form__error-message">Email ou mot de passe incorrect</p>}
        <Input handleChange={handleChange} label="Email" name="email" value={email} />
        <Input handleChange={handleChange} label="Mot de passe" name="password" value={password} />
        <Link to="/login/forgotten-password" className="authentication-form__link">Mot de passe oublié</Link>
        <Link to="/inscription" className="authentication-form__link">Vous voulez vous inscrire? C'est ici</Link>
        <button type="submit" className="authentication-form__submit">Connexion</button>
      </form>
    </>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Login;
