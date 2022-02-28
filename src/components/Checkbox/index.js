import PropTypes from 'prop-types';

import './style.scss';

const Checkbox = ({
  name, field, checked, handleChange, rounded,
}) => {
  const changeStatus = () => {
    handleChange(field, name);
  };
  return (
    <div className={rounded ? 'checkbox rounded' : 'checkbox'}>
      <label htmlFor={field} className="checkbox__label">{name}</label>
      <input
        type="checkbox"
        name={field}
        id={field}
        checked={checked}
        onChange={changeStatus}
        className="checkbox__input"
      />
      <div className="checkbox__logo">logo</div>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
};

Checkbox.defaultProps = {
  rounded: false,
};

export default Checkbox;
