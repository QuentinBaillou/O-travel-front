/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { saveFavoritesDestination, deleteFavorite } from 'src/actions/favoritesActions';

import { Link } from 'react-router-dom';

import './style.scss';

const Destination = ({
  picture, surname, extract, pros, price_per_night: pricePerNight, id,
}) => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.isUserLogged);
  const favorites = useSelector((state) => state.favorites.destinations);

  const buttonDisplay = () => {
    if (logged) {
      if (favorites.find((favorite) => favorite.id === parseInt(id, 10))) {
        return (
          <button
            type="button"
            className="destination__add"
            onClick={() => {
              dispatch(deleteFavorite(id));
            }}
          >Retirer des favoris
          </button>
        );
      }
      return (
        <button
          type="button"
          className="destination__add"
          onClick={() => {
            dispatch(saveFavoritesDestination(id));
          }}
        >Ajouter au favoris
        </button>
      );
    }
  };

  return (
    <div className="destination">
      <Link to={`/destinations/${id}`}><img src={picture} alt={surname} className="destination__picture" /></Link>
      <div className="destination__content">
        <Link to={`/destinations/${id}`}>
          <h3 className="destination__surname">{surname}</h3>
        </Link>
        <p className="destination__extract">Résumé : <span>{extract}</span></p>
        <p className="destination__pros">Point fort : <span>{pros}</span></p>
        <p className="destination__price">Prix par personnes : {pricePerNight}</p>
        {buttonDisplay()}
      </div>
    </div>
  );
};

Destination.propTypes = {
  picture: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  extract: PropTypes.string.isRequired,
  pros: PropTypes.string.isRequired,
  price_per_night: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Destination;
