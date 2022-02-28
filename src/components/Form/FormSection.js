import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Checkbox from 'src/components/Checkbox';

import './style.scss';

const FormSection = ({
  field, legend, handleChange, isItemChecked,
}) => {
  // Get elements from state
  const sectionElements = useSelector((state) => state.form[field]);
  const selectedSectionElements = useSelector((state) => state.form[`${field}Selected`]);

  // Get the property other than id from objects in state element
  const keys = Object.keys(sectionElements[0]);
  const [elementMainKey] = keys.filter((key) => key !== 'id');

  return (
    <fieldset className={`form__${field}`}>
      <legend className="form__legend">{legend}</legend>
      {
      sectionElements.map(
        (element) => (
          <Checkbox
            item={element}
            name={element[elementMainKey]}
            field={field}
            checked={isItemChecked(element, selectedSectionElements)}
            handleChange={handleChange}
            key={element.id}
          />
        ),
      )
    }
    </fieldset>
  );
};

FormSection.propTypes = {
  field: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isItemChecked: PropTypes.func.isRequired,
};

export default FormSection;
