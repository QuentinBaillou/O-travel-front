import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFormElements } from 'src/actions/formActions';
import Checkbox from 'src/components/Checkbox';

import './style.scss';

const FormSection = ({
  field, legend, handleChange, isItemChecked,
}) => {
  let elementMainKey = '';
  // Get elements from state, based on props
  const sectionElements = useSelector((state) => state.form[field]);
  const selectedSectionElements = useSelector((state) => state.form[`${field}Selected`]);
  const dispatch = useDispatch();
  console.log(sectionElements);
  console.log(selectedSectionElements);

  useEffect(() => {
    dispatch(getFormElements(field));
  }, []);

  // Get the property other than id from objects in state element
  if (sectionElements[0]) {
    const keys = Object.keys(sectionElements[0]);
    [elementMainKey] = keys.filter((key) => key !== 'id');
  }
  console.log(elementMainKey);

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
