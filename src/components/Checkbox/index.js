import PropTypes from 'prop-types';
import { useState } from 'react';

import './style.scss';

const Checkbox = ({
  item, name, field, isChecked, handleChange, rounded,
}) => {
  const [checked, setChecked] = useState(isChecked);
  // Local state for dynamically imported image for checkboxes
  const [image, setImage] = useState('');
  // Dynamic import of image, based on field and item.id props
  import(`src/assets/images/${field.slice(0, -1)}${item.id}.svg`).then((response) => {
    setImage(response.default);
  });

  const changeStatus = () => {
    setChecked(!checked);
    handleChange(field, item);
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
      <div className="checkbox__logo"><img src={image} alt={`${name} logo`} /></div>
    </div>
  );
};

Checkbox.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
};

Checkbox.defaultProps = {
  rounded: false,
};

export default Checkbox;
