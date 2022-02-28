import { useDispatch } from 'react-redux';

import { setSelectedItem } from 'src/actions/formActions';

import backgroundVideo from 'src/assets/video/background-video.mp4';

import FormSection from './FormSection';

import './style.scss';

const Form = () => {
  const dispatch = useDispatch();

  const handleChange = (field, item) => {
    // Convert field name to match the changing array, in the state
    const fieldToSend = `${field}Selected`;
    dispatch(setSelectedItem(fieldToSend, item));
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
    <div className="wrapper">
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <form className="form">
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
      </form>
    </div>
  );
};

export default Form;