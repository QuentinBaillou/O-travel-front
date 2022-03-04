/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFormField, sendLoginForm } from 'src/actions/authentication';
import './style.scss';

const Login = () => {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFormField(e.target.value, e.target.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginForm());
  };

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
