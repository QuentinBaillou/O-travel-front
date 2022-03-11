// == Import
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Image, List, Button } from 'semantic-ui-react';
import { getFavoritesDestination } from 'src/actions/favoritesActions';

// == Composant
const Profil = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getFavoritesDestination());
    },
    [],
  );

  const destinations = useSelector((state) => state.favorites.destinations);
  const firstname = useSelector((state) => state.authentication.firstname);
  const lastname = useSelector((state) => state.authentication.lastname);
  const email = useSelector((state) => state.authentication.email);
  console.table(destinations);
  console.log(destinations);

  return (

    <div className="profil">
      <h2 className="profil-title">Mon profil</h2>
      <List className="profil-list">
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          size="medium"
          circular
        />
        <div className="profil-description">
          <List.Item>
            <List.Icon name="user" />Nom :
            <List.Content>{lastname}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="user" />Prénom :
            <List.Content>{firstname}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />Pays :
            <List.Content>France, FR</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />E-mail :
            <List.Content>
              <a href="mailto:Yves@travelInc.com">{email}</a>
            </List.Content>
          </List.Item>
        </div>
        <div className="profil-button">
          <Button color="blue">Créer/Modifier</Button>
          <Button color="blue">Changer mot de passe</Button>
        </div>
      </List>
      {true && (
        <div className="favorites">
          <h2 className="favorites-title">Listes favoris</h2>
          <List className="favorites-list">
            {destinations.map((destination) => (
              <div className="favorites-card" key={destination.id}>
                <Image
                  src={destination.picture}
                  size="medium"
                />
                <List.Item>
                  <List.Content>{destination.surname}, {destination.state}</List.Content>
                  <List.Description>
                    {destination.extract}
                  </List.Description>
                  <Button color="red" icon="trash alternate" />
                </List.Item>
              </div>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

// == Export
export default Profil;
