import { useDispatch, useSelector } from 'react-redux';

import Checkbox from 'src/components/Checkbox';
import { setSelectedItem } from 'src/actions/formActions';

import backgroundVideo from 'src/assets/video/background-video.mp4';

import './style.scss';

const Form = () => {
  // Get items from state
  const landscapes = useSelector((state) => state.form.landscapes);
  const transports = useSelector((state) => state.form.transports);
  const seasons = useSelector((state) => state.form.seasons);
  const transportsSelected = useSelector((state) => state.form.transportsSelected);
  const landscapesSelected = useSelector((state) => state.form.landscapesSelected);
  const seasonsSelected = useSelector((state) => state.form.seasonsSelected);

  const dispatch = useDispatch();

  const handleChange = (field, item) => {
    // Convert field name to match the changing array, in the state
    const fieldToSend = `${field}sSelected`;
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
        <fieldset className="form__landscapes">
          <legend className="form__legend">Un paysage de rêve?</legend>
          {
            landscapes.map(
              (landscape) => (
                <Checkbox
                  item={landscape}
                  name={landscape.name}
                  field="landscape"
                  checked={isItemChecked(landscape, landscapesSelected)}
                  handleChange={handleChange}
                  key={landscape.id}
                />
              ),
            )
          }
        </fieldset>
        <div className="form__section">
          <fieldset className="form__transports">
            <legend className="form__legend">Un moyen de transport idéal?</legend>
            {
              transports.map(
                (transport) => (
                  <Checkbox
                    item={transport}
                    name={transport.way}
                    field="transport"
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
          <fieldset className="form__seasons">
            <legend className="form__legend">Une saison idéale?</legend>
            {
              seasons.map(
                (season) => (
                  <Checkbox
                    item={season}
                    name={season.season}
                    field="season"
                    checked={isItemChecked(season, seasonsSelected)}
                    handleChange={handleChange}
                    key={season.id}
                  />
                )
                ,
              )
            }
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Form;
