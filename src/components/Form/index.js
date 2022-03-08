import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setSelectedItem, sendDestinationForm, resetChoices } from 'src/actions/formActions';
import sendLogo from 'src/assets/images/send.svg';
import FormChoices from './FormChoices';

import FormSection from './FormSection';
import FormSlider from './FormSlider';

import './style.scss';

const Form = () => {
  const dispatch = useDispatch();

  const handleChange = (field, item) => {
    // Convert field name to match the changing array, in the state
    const fieldToSend = `${field}Selected`;
    dispatch(setSelectedItem(fieldToSend, item));
  };

  useEffect(() => () => {
    dispatch(resetChoices());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendDestinationForm());
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
    <form className="main-form" onSubmit={handleSubmit}>
      <FormSection
        field="landscapes"
        legend="Un paysage de rêve?"
        handleChange={handleChange}
        isItemChecked={isItemChecked}
      />
      <div className="main-form__section">
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
      <FormSlider />
      <FormChoices />
      <button type="submit" className="main-form__submit"><img src={sendLogo} alt="send logo" /></button>
    </form>
  );
};

export default Form;
