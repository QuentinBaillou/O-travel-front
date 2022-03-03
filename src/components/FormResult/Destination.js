import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.scss';

const Destination = ({
  picture, surname, extract, pros, price_per_night: pricePerNight, id,
}) => (
  <div className="destination">
    <Link to={`/destinations/${id}`}><img src={picture} alt={surname} className="destination__picture" /></Link>
    <div className="content">
      <Link to={`/destinations/${id}`}>
        <h3 className="destination__surname">{surname}</h3>
      </Link>
      <p className="destination__extract">Résumé : <span>{extract}</span></p>
      <p className="destination__pros">Point fort : <span>{pros}</span></p>
      <p className="destination__price">Prix par personnes : {pricePerNight}</p>
    </div>
  </div>
);

Destination.propTypes = {
  picture: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  pros: PropTypes.string.isRequired,
  price_per_night: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Destination;
