import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFormField } from 'src/actions/authenticationActions';
import Login from './Login';
import ForgottenPassword from './ForgottenPassword';
import './style.scss';

const AuthenticationForm = ({ shape }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFormField(e.target.value, e.target.id));
  };

  return (
    <div className="form-wrapper">
      {shape === 'login' && <Login handleChange={handleChange} />}
      {shape === 'forgotten-password' && <ForgottenPassword handleChange={handleChange} />}
    </div>
  );
};

AuthenticationForm.propTypes = {
  shape: PropTypes.string.isRequired,
};

export default AuthenticationForm;
