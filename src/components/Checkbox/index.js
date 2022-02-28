import PropTypes from 'prop-types';
import img from 'src/assets/images/desert.svg';

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
      <div className="checkbox__logo"><img src={img} alt="boat logo" /></div>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
};

Checkbox.defaultProps = {
  rounded: false,
  checked: false,
};

export default Checkbox;
