import { useDispatch, useSelector } from 'react-redux';

import Checkbox from 'src/components/Checkbox';
import { setSelectedItem } from 'src/actions/formActions';

import './style.scss';

const Form = () => {
  // Get items from state
  const landscapes = useSelector((state) => state.form.landscapes);
  const transports = useSelector((state) => state.form.transports);
  const transportsSelected = useSelector((state) => state.form.transportsSelected);
  const landscapesSelected = useSelector((state) => state.form.landscapesSelected);

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
    <form className="form">
      <fieldset className="form__landscapes">
        <legend className="form__legend">Un paysage de rêve?</legend>
        {
          landscapes.map(
            (landscape) => (
              <Checkbox
                item={landscape}
                name={landscape.name}
                field="landscapes"
                checked={isItemChecked(landscape, landscapesSelected)}
                handleChange={handleChange}
                key={landscape.id}
              />
            ),
          )
        }
      </fieldset>
      <fieldset className="form__transports">
        <legend className="form__legend">Un moyen de transport idéal?</legend>
        {
          transports.map(
            (transport) => (
              <Checkbox
                item={transport}
                name={transport.way}
                field="transports"
                checked={isItemChecked(transport, transportsSelected)}
                handleChange={handleChange}
                key={transport.id}
                rounded
              />
            )
            ,
          )
        }
      </fieldset>
    </form>
  );
};

export default Form;
