/* eslint-disable max-len */

import './style.scss';
import { List } from 'semantic-ui-react';

const Contact = () => (
  <div className="contact">
    <h2 className="contact-title">Contactez-nous</h2>
    <div className="contact-content">
      <h3 className="contact-title-text">Pour nous contactez :</h3>
      <p className="contact-text">Nous mettons tout en oeuvre pour vous répondre dans les meilleurs délais. Merci de bien vouloir privilégier ce canal de contact.</p>
      <List className="contact-list">
        <List.Item className="contact-items">
          <List.Icon name="mail" />
          <List.Content><a href="mailto:Yves@travelInc.com">O'travel@travelInc.com</a></List.Content>
        </List.Item>
        <List.Item className="contact-items">
          <List.Icon name="home" />
          <List.Content>2 Rue du Travel, 90900 Travel, FR</List.Content>
        </List.Item>
        <List.Item className="contact-items">
          <List.Icon name="phone" />
          <List.Content>09.35.47.89.64</List.Content>
        </List.Item>
      </List>
    </div>
  </div>
);

export default Contact;
