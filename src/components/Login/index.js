import { useSelector } from 'react-redux';
import './style.scss';

const Login = () => {
  const email = useSelector((state) => {
    state.authentication.email;
  });
  const password = 'bibi';
  return (
    <form className="login">
      <label htmlFor="email">email
        <input type="email" value={email} id="email" />
      </label>
      <label htmlFor="password">Mot de passe
        <input type="password" value={password} id="password" />
      </label>
    </form>
  );
};

export default Login;
