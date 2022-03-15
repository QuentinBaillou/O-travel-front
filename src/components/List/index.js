/* eslint-disable consistent-return */
// == Import
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// import flag from 'src/assets/images/canada-svgrepo-com.svg';

import { Card, Image } from 'semantic-ui-react';
import { getDestinations } from 'src/actions/listActions';
import { saveFavoritesDestination, deleteFavorite } from 'src/actions/favoritesActions';
import Loading from '../Loading';

// == Composant
const List = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.isUserLogged);

  useEffect(
    () => {
      dispatch(getDestinations());
    },
    [],
  );

  const destinations = useSelector((state) => state.list.destinations);
  const favoritesDestinations = useSelector((state) => state.favorites.destinations);

  /**
   * Return the correct display depending on favorite destinations
   * @param {int} destinationId Id of the current destination
   * @returns Element based on presence or not in favorite destinations
   */
  const favoriteStarDisplay = (destinationId) => {
    if (logged) {
      // If the current destination is in favorites
      if (favoritesDestinations.find(
        (favoriteDestination) => favoriteDestination.id === destinationId,
      )) {
        return (
          <Image
            ui={false}
            onClick={
              () => {
                dispatch(deleteFavorite(destinationId));
              }
            }
            className="favorite"
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
        );
      }
      return (
        <Image
          ui={false}
          onClick={
              () => {
                dispatch(saveFavoritesDestination(destinationId));
              }
            }
          className="not-favorite"
          fluid
          label={{ as: 'a', corner: 'right', icon: 'star' }}
        />
      );
    }
  };

  return (
    <div className="trip-list">
      <h2 className="trip-title">Les voyages</h2>
      {destinations.length === 0 && <Loading />}
      {destinations.length > 0 && (
      <>
        <Card.Group>
          {destinations.map((destination) => (
            <Card key={destination.id}>
              <Link to={`/destinations/${destination.id}`}>
                <Card.Content>
                  {/* <Image src={flag} size="mini" /> */}
                  <Image
                    src={destination.picture}
                  />
                  <Card.Header>
                    {destination.state} | {destination.surname}
                    <Card.Description>
                      8 nuits | train
                    </Card.Description>
                  </Card.Header>
                </Card.Content>
              </Link>
              {favoriteStarDisplay(destination.id)}
            </Card>
          ))}
        </Card.Group>
      </>
      )}
    </div>
  );
};

// == Export
export default List;
