/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import './style.scss';

const Input = ({
  value, name, handleChange, label, firstInput,
}) => {
  const focusInput = useRef();

  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  return (
    <div>
      <label htmlFor={name} className="user-form__label">{label}*</label>
      <input
        type={name}
        className="user-form__input"
        id={name}
        value={value}
        onChange={handleChange}
        required
        ref={firstInput ? focusInput : null}
      />
      <legend className="user-form__legend">Champs requis</legend>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  firstInput: PropTypes.bool,
};

Input.defaultProps = {
  firstInput: false,
};

export default Input;
