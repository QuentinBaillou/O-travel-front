import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFormField, login, sendForm } from 'src/actions/authenticationActions';
import Input from './Input';

import './style.scss';

const Login = () => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const isFormSend = useSelector((state) => state.authentication.isFormSend);
  const isUserLogged = useSelector((state) => state.authentication.isUserLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFormField(e.target.value, e.target.id));
  };

  // Redirection after successfully logged, using useNavigate hook from react-router-dom
  useEffect(() => {
    if (isUserLogged) {
      navigate('/');
    }
  });

  const handlePassword = () => {
    console.log('Mot de passe oublié cliqué');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    dispatch(sendForm(false));
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      {(isFormSend && !isUserLogged) && <p className="login__error-message">Email ou mot de passe incorrect</p>}
      <Input handleChange={handleChange} label="Email" name="email" value={email} />
      <Input handleChange={handleChange} label="Mot de passe" name="password" value={password} />
      <Link to="/login/forgotten-password" className="login__link" onClick={handlePassword}>Mot de passe oublié</Link>
      <Link to="/sign-in" className="login__link">Vous voulez vous inscrire? C'est ici</Link>
      <button type="submit" className="login__submit">Connexion</button>
    </form>
  );
};

export default Login;
