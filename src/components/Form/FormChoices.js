import { useSelector } from 'react-redux';

import './style.scss';

const FormChoices = () => {
  const landscapesSelected = useSelector((state) => state.form.landscapesSelected);
  const transportsSelected = useSelector((state) => state.form.transportsSelected);
  const seasonsSelected = useSelector((state) => state.form.seasonsSelected);
  const areSeasonsPresent = seasonsSelected.length > 0;
  const areTransportsPresent = transportsSelected.length > 0;
  const areLandscapesPresent = landscapesSelected.length > 0;
  return (
    (areLandscapesPresent || areSeasonsPresent || areTransportsPresent) && (
    <div className="main-form__choices">
      {areLandscapesPresent && (
        <p>Vous voulez un paysage {
          // Condition to match a correct punctuation,
          // with a comma if there is more than 1 item in the array
          landscapesSelected.map((landscape, index) => (index >= 1 ? `, ${landscape.name}` : landscape.name))
        }.
        </p>
      )}
      {areTransportsPresent && (
        <p>Vous voulez vous déplacer en {
          transportsSelected.map((transport, index) => (index >= 1 ? `, ${transport.way}` : transport.way))
        }.
        </p>
      )}
      {areSeasonsPresent && (
        <p>Vous voulez partir en {
          seasonsSelected.map((season, index) => (index >= 1 ? `, ${season.season}` : season.season))
        }.
        </p>
      )}
    </div>
    )
  );
};

export default FormChoices;
