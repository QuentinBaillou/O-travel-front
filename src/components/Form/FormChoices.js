import { useSelector } from 'react-redux';

import './style.scss';

const FormChoices = () => {
  const landscapesSelected = useSelector((state) => state.form.landscapesSelected);
  const transportsSelected = useSelector((state) => state.form.transportsSelected);
  const seasonsSelected = useSelector((state) => state.form.seasonsSelected);
  return (
    (landscapesSelected.length > 0
    || transportsSelected.length > 0
    || seasonsSelected.length > 0) && (
    <div className="form__choices">
      {landscapesSelected.length > 0
          && <p>Vous voulez un paysage {landscapesSelected.map((landscape) => `, ${landscape.name}`)}.</p>}
      {transportsSelected.length > 0
          && <p>Vous voulez vous déplacer en {transportsSelected.map((transport) => `, ${transport.way}`)}</p>}
      {seasonsSelected.length > 0
          && <p>Vous voulez partir en {seasonsSelected.map((seasons) => `, ${seasons.season}`)}.</p>}
    </div>
    )
  );
};

export default FormChoices;
