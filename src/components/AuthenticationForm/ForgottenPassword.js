import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from './Input';

import './style.scss';

const ForgottenPassword = ({ handleChange }) => {
  const email = useSelector((state) => state.authentication.email);
  const handleSubmit = () => {

  };

  return (
    <form className="authentication-form" onSubmit={handleSubmit}>
      {/* {(isFormSend && !isUserLogged) &&
      <p className="authentication-form__error-message">Email ou mot de passe incorrect</p>} */}
      <Input handleChange={handleChange} label="Email" name="email" value={email} />
      <Link to="/login" className="authentication-form__link">Revenir à la connexion</Link>
      <button type="submit" className="authentication-form__submit">Envoyer</button>
    </form>
  );
};

ForgottenPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default ForgottenPassword;
