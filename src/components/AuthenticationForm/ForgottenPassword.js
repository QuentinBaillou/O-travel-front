import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNewPassword } from 'src/actions/authenticationActions';
import Input from './Input';

import './style.scss';

const ForgottenPassword = ({ handleChange }) => {
  const email = useSelector((state) => state.authentication.email);
  const errorState = useSelector((state) => state.authentication.errorState);
  const errorMessage = useSelector((state) => state.authentication.errorMessage);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNewPassword());
  };

  return (
    <form className="authentication-form" onSubmit={handleSubmit}>
      { errorState && <p className="authentication-form__error-message">{errorMessage}</p>}
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
