// == Import
import './style.scss';

import { useDispatch } from 'react-redux';

import { Container, Image, List, Button } from 'semantic-ui-react';

// == Composant
const Profil = () => {
  const dispatch = useDispatch();

  return (
    <div className='profil'>
      <h2>Mon profil</h2>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="medium"
        circular
      />
      <List>
        <List.Item>
          <List.Icon name='user' />
          <List.Content>John | Wilkinson  </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:Yves@travelInc.com'>John@travelInc.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Button>Créer/Modifier</Button>
      <Button>Changer mot de passe</Button>
      <div className='favorites'>
        <h2>Listes favoris</h2>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' 
        size='medium' disabled 
        />
        <p>description card</p>
        <Button icon='trash alternate' />
      </div>
    </div>
  );
};

// == Export
export default Profil;
