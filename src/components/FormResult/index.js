import { useSelector } from 'react-redux';

import Destination from './Destination';
import './style.scss';

const FormResult = () => {
  const destinations = useSelector((state) => state.form.destinations);
  const isFormSend = useSelector((state) => state.form.isFormSend);

  const displayResult = () => {
    if (isFormSend) {
      if (destinations.length > 0) {
        return (
          <ul className="form-result__list">
            {
            destinations.map(
              (destination) => (
                <Destination
                  {...destination}
                  key={destination.id}
                />
              ),
            )
          }
          </ul>
        );
      }
      return <p className="form-result__empty">Désolé, il n'y a aucune destinations pour vous</p>;
    }
  };

  return (
    <div className="form-result">
      {
        displayResult()
      }
    </div>
  );
};

export default FormResult;
