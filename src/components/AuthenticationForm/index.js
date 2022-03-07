import PropTypes from 'prop-types';
import Login from './Login';
import './style.scss';

const AuthenticationForm = ({ shape }) => (
  <div className="form-wrapper">
    {shape === 'login' && <Login />}
  </div>
);

AuthenticationForm.propTypes = {
  shape: PropTypes.string.isRequired,
};

export default AuthenticationForm;
