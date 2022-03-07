/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFormField, login, sendForm } from 'src/actions/authenticationActions';
import './style.scss';

const Login = () => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const isUserLogged = useSelector((state) => state.authentication.isUserLogged);
  const isFormSend = useSelector((state) => state.authentication.isFormSend);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFormField(e.target.value, e.target.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    dispatch(sendForm(false));
  };

  const handlePassword = () => {
    console.log('Mot de passe oublié cliqué');
  };

  // Redirection after successfully logged, using useNavigate hook from react-router-dom
  useEffect(() => {
    if (isUserLogged) {
      navigate('/');
    }
  });

  return (
    <div className="form-wrapper">
      <form className="login" onSubmit={handleSubmit}>
        {(isFormSend && !isUserLogged) && <p className="login__error-message">Email ou mot de passe incorrect</p>}
        <div>
          <label htmlFor="email" className="login__label">Email</label>
          <input
            type="email"
            className="login__input"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="login__label">Mot de passe</label>
          <input
            type="password"
            className="login__input"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <p className="login__link" onClick={handlePassword}>Mot de passe oublié</p>
        <Link to="/sign-in" className="login__link">Vous voulez vous inscrire? C'est ici</Link>
        <button type="submit" className="login__submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
