// == Import
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import train from 'src/assets/images/train-1542096_1920.jpg';
import flag from 'src/assets/images/canada-svgrepo-com.svg';

import { Card, Image, Pagination } from 'semantic-ui-react';
import { getDestinations } from 'src/actions/listActions';

// == Composant
const List = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getDestinations());
    },
    [],
  );

  const currentDestination = useSelector((state) => state.destination.destination);
  console.log(currentDestination);

  return (
    <div className="trip-list">
      <h2 className="trip-title">Les voyages</h2>
      <Card.Group>
        <Link to="/">
          <Card>
            <Card.Content>
              <Image src={flag} size="mini" />
              <Image
                src={train}
                ui={false}
                fluid
                label={{ as: 'div', corner: 'right', icon: 'star' }}
              />
              <Card.Header>
                Rocky Mountaineer
                <Card.Description>
                  8 nuits | train
                </Card.Description>
              </Card.Header>
            </Card.Content>
          </Card>
        </Link>
      </Card.Group>
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={3}
      />
    </div>
  );
};

// == Export
export default List;
