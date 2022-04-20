import { useDispatch } from 'react-redux';

import { setSelectedItem, sendDestinationForm } from 'src/actions/formActions';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendDestinationForm());
  };

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <FormSection
        field="landscapes"
        legend="Un paysage de rêve?"
        handleChange={handleChange}
      />
      <div className="main-form__section">
        <FormSection
          field="transports"
          legend="Un moyen de transport idéal?"
          handleChange={handleChange}
          rounded
        />
        <FormSection
          field="seasons"
          legend="Une saison idéale?"
          handleChange={handleChange}
        />
      </div>
      <FormSlider />
      <FormChoices />
      <button type="submit" className="main-form__submit">
        <img src={sendLogo} alt="send logo" />
      </button>
    </form>
  );
};

export default Form;
