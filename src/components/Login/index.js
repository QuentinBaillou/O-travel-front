/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setFormField, login } from 'src/actions/authenticationActions';
import './style.scss';

const Login = () => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const logged = useSelector((state) => state.authentication.isUserLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFormField(e.target.value, e.target.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  // Redirection after successfully logged, using useNavigate hook from react-router-dom
  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  });

  return (
    <div className="form-wrapper">
      <form className="login" onSubmit={handleSubmit}>
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
        <Link to="/sign-in" className="login__sign-in-link">Vous voulez vous inscrire? C'est ici</Link>
        <button type="submit" className="login__submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
