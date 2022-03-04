// == Import
import './style.scss';

import { useDispatch } from 'react-redux';

import { Image, List, Button } from 'semantic-ui-react';

// == Composant
const Profil = () => {
  const dispatch = useDispatch();

  return (
    <div className="profil">
      <h2 className="profil-title">Mon profil</h2>
      <List className="profil-list">
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="medium"
          circular
        />
        <div className="profil-description">
          <List.Item>
            <List.Icon name="user" />
            <List.Content>John | Wilkinson  </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>New York, NY</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
              <a href="mailto:Yves@travelInc.com">John@travelInc.com</a>
            </List.Content>
          </List.Item>
        </div>
        <div className="profil-button">
          <Button>Créer/Modifier</Button>
          <Button>Changer mot de passe</Button>
        </div>
      </List>
      <div className="favorites">
        <h2 className="favorites-title">Listes favoris</h2>
        <List className="favorites-list">
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            size="medium"
            disabled
          />
          <p>description card</p>
          <Button icon="trash alternate" />
        </List>
      </div>
    </div>
  );
};

// == Export
export default Profil;
