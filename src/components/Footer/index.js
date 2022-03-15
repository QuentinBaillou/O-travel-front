import './style.scss';

import { List } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer">
    <List horizontal>
      <List.Item href="/mentions-legales">Mentions légales</List.Item>
      <List.Item href="#">Conditions d'utilisation</List.Item>
    </List>
    <List>
      <List.Item>© O'Travel 2022, Inc.</List.Item>
    </List>
  </div>
);

export default Footer;
