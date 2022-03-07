// == Import
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Image, List, Button } from 'semantic-ui-react';
import { getFavoritesDestinations } from 'src/actions/favoritesActions';

// == Composant
const Profil = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getFavoritesDestinations());
    },
    [],
  );

  const destinations = useSelector((state) => state.favorites.destinations);
  console.table(destinations);

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
            <List.Content>Wilkinson</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="user" />Prénom :
            <List.Content>John</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />Pays :
            <List.Content>New York, NY</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />E-mail :
            <List.Content>
              <a href="mailto:Yves@travelInc.com">John@travelInc.com</a>
            </List.Content>
          </List.Item>
        </div>
        <div className="profil-button">
          <Button color="blue">Créer/Modifier</Button>
          <Button color="blue">Changer mot de passe</Button>
        </div>
      </List>
      <div className="favorites">
        <h2 className="favorites-title">Listes favoris</h2>
        <List className="favorites-list">
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            size="medium"
          />
          <List.Item>
            <List.Content>New York, NY</List.Content>
            <List.Description>
              An excellent polish restaurant, quick delivery and hearty, filling
              meals.excellent polish restaurant, quick delivery and hearty, filling
              meals.excellent polish restaurant, quick delivery and hearty, filling
              meals.
            </List.Description>
            <Button color="red" icon="trash alternate" />
          </List.Item>
        </List>
      </div>
    </div>
  );
};

// == Export
export default Profil;
