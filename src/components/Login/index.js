import { useDispatch, useSelector } from 'react-redux';
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
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="email">Email
        <input type="email" value={email} id="email" onChange={handleChange} />
      </label>
      <label htmlFor="password">Mot de passe
        <input type="password" value={password} id="password" onChange={handleChange} />
      </label>
      <button type="submit" className="login__submit">Connexion</button>
    </form>
  );
};

export default Login;
