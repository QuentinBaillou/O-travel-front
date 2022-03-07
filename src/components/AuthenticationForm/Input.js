/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({
  value, name, handleChange, label,
}) => (
  <div>
    <label htmlFor={name} className="login__label">{label}</label>
    <input
      type={name}
      className="login__input"
      id={name}
      value={value}
      onChange={handleChange}
    />
  </div>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,

};

export default Input;
