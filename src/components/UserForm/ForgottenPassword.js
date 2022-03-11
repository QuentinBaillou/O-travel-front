import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNewPassword } from 'src/actions/userActions';
import Input from './Input';

import './style.scss';

const ForgottenPassword = ({ handleChange }) => {
  const email = useSelector((state) => state.user.email);
  const errorState = useSelector((state) => state.user.errorState);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNewPassword());
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      { errorState && <p className="user-form__error-message">{errorMessage}</p>}
      <Input handleChange={handleChange} label="Email" name="email" value={email} firstInput />
      <Link to="/login" className="user-form__link">Revenir à la connexion</Link>
      <button type="submit" className="user-form__submit">Envoyer</button>
    </form>
  );
};

ForgottenPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default ForgottenPassword;
