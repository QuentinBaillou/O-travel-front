import './style.scss';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const Footer = () => (
  <div className="footer">
    <List horizontal>
      <List.Item><Link to="/mentions-legales">Mentions légales</Link></List.Item>
      <List.Item><Link to="/contact">Contactez-nous</Link></List.Item>
    </List>
    <List>
      <List.Item>© O'Travel 2022, Inc.</List.Item>
    </List>
  </div>
);

export default Footer;
