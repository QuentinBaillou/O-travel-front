import { useDispatch, useSelector } from 'react-redux';

import { setSelectedItem, sendForm } from 'src/actions/formActions';
import sendLogo from 'src/assets/images/send.svg';

import FormSection from './FormSection';
import FormSlider from './FormSlider';

import './style.scss';

const Form = () => {
  const dispatch = useDispatch();
  const landscapesSelected = useSelector((state) => state.form.landscapesSelected);
  const transportsSelected = useSelector((state) => state.form.transportsSelected);
  const seasonsSelected = useSelector((state) => state.form.seasonsSelected);

  const handleChange = (field, item) => {
    // Convert field name to match the changing array, in the state
    const fieldToSend = `${field}Selected`;
    dispatch(setSelectedItem(fieldToSend, item));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendForm());
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
      <FormSlider />
      <div className="form__choices">
        {landscapesSelected.length > 0
        && <p>Vous voulez un paysage {landscapesSelected.map((landscape) => `, ${landscape.name}`)}.</p>}
        {transportsSelected.length > 0
        && <p>Vous voulez vous déplacer en {transportsSelected.map((transport) => `, ${transport.way}`)}</p>}
        {seasonsSelected.length > 0
        && <p>Vous voulez partir en {seasonsSelected.map((seasons) => `, ${seasons.season}`)}.</p>}
      </div>
      <button type="submit" className="form__submit"><img src={sendLogo} alt="send logo" /></button>
    </form>
  );
};

export default Form;
