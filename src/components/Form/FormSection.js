import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFormElements } from 'src/actions/formActions';
import Checkbox from 'src/components/Checkbox';

import './style.scss';

const FormSection = ({
  field, legend, handleChange, rounded,
}) => {
  let elementMainKey = '';
  // Get elements from state, based on props
  const sectionElements = useSelector((state) => state.form[field]);
  const selectedSectionElements = useSelector((state) => state.form[`${field}Selected`]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormElements(field));
  }, []);

  // Get the property other than id in objects from state element
  if (sectionElements[0]) {
    const keys = Object.keys(sectionElements[0]);
    [elementMainKey] = keys.filter((key) => key !== 'id');
  }

  /**
   * This function return true if the item is in the array, and false if not
   * @param {Object} item Item to find
   * @param {array} arrayToSearch Searching array
   * @returns bool
   */
  const isItemChecked = (item, arrayToSearch) => {
    if (arrayToSearch.find((arrayItem) => arrayItem.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <fieldset className={`main-form__${field}`}>
      <legend className="main-form__legend">{legend}</legend>
      {
      sectionElements.map(
        (element) => (
          <Checkbox
            item={element}
            name={element[elementMainKey]}
            field={field}
            isChecked={isItemChecked(element, selectedSectionElements)}
            handleChange={handleChange}
            key={element.id}
            rounded={rounded}
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
  rounded: PropTypes.bool,
};

FormSection.defaultProps = {
  rounded: false,
};

export default FormSection;
