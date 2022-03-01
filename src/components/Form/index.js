import { useDispatch, useSelector } from 'react-redux';

import { setSelectedItem, sendForm, setBudgetValue } from 'src/actions/formActions';
import sendLogo from 'src/assets/images/send.svg';

import FormSection from './FormSection';

import './style.scss';

const Form = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.form.budget);

  const handleChange = (field, item) => {
    // Convert field name to match the changing array, in the state
    const fieldToSend = `${field}Selected`;
    dispatch(setSelectedItem(fieldToSend, item));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendForm());
  };

  const handleSlider = (e) => {
    dispatch(setBudgetValue(e.target.value));
  };

  /**
   * This function return true if the item is in the array, and false if not
   * @param {Object} item Item to find
   * @param {array} arrayToSearch Searching array
   * @returns bool
   */
  const isItemChecked = (item, arrayToSearch) => {
    if (arrayToSearch.find((arrayItem) => arrayItem === item)) {
      return true;
    }
    return false;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormSection
        field="landscapes"
        legend="Un paysage de rêve?"
        handleChange={handleChange}
        isItemChecked={isItemChecked}
      />
      <div className="form__section">
        <FormSection
          field="transports"
          legend="Un moyen de transport idéal?"
          handleChange={handleChange}
          isItemChecked={isItemChecked}
        />
        <FormSection
          field="seasons"
          legend="Une saison idéale?"
          handleChange={handleChange}
          isItemChecked={isItemChecked}
        />
      </div>
      <div className="form__slider-container">
        <input
          type="range"
          className="form__slider"
          value={budget}
          onChange={handleSlider}
          min="0"
          max="5000"
          step="500"
        />
      </div>
      <button type="submit" className="form__submit"><img src={sendLogo} alt="send logo" /></button>
    </form>
  );
};

export default Form;
