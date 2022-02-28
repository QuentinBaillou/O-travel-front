import './style.scss';

import { Card, Image } from 'semantic-ui-react';

const List = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Header>Rocky Mountaineer</Card.Header>
        <Card.Description>
          8 nuits | train
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>

);

export default List;
