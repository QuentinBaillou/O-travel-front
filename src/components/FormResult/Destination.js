import PropTypes from 'prop-types';

import './style.scss';

const Destination = ({
  picture, surname, extract, pros, pricePerNight,
}) => (
  <div className="destination">
    <img src={picture} alt={surname} className="destination__picture" />
    <div className="content">
      <h3 className="destination__surname">{surname}</h3>
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
  pricePerNight: PropTypes.string.isRequired,
};

export default Destination;
