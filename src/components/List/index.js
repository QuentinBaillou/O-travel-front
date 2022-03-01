import './style.scss';

import train from 'src/assets/images/train-1542096_1920.jpg';
import flag from 'src/assets/images/canada-svgrepo-com.svg';

import { Card, Image, Pagination } from 'semantic-ui-react';

const List = () => (
  <div className="trip-list">
    <h2 className="trip-title">Les voyages</h2>
    <Card.Group>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image src={flag} size="mini" />
          <Image
            src={train}
            ui={false}
            fluid
            label={{ as: 'a', corner: 'right', icon: 'star' }}
          />
          <Card.Header>
            Rocky Mountaineer
            <Card.Description>
              8 nuits | train
            </Card.Description>
          </Card.Header>
        </Card.Content>
      </Card>
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

export default List;
