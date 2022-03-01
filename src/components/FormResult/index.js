import { useSelector } from 'react-redux';

import Destination from './Destination';
import './style.scss';

const FormResult = () => {
  const destinations = useSelector((state) => state.form.destinations);
  const isFormSend = useSelector((state) => state.form.isFormSend);

  return (
    <div className="form-result">
      {
        isFormSend && (
        <ul className="form-result__list">
          {
          destinations.map(
            (destination) => (
              <Destination
                picture={destination.picture}
                surname={destination.surname}
                extract={destination.extract}
                pros={destination.pros}
                pricePerNight={destination.price_per_night}
              />
            ),
          )
        }
        </ul>
        )
      }
    </div>
  );
};

export default FormResult;
