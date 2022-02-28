// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Form from 'src/components/Form';

import './style.scss';

// == Composant
const Otravel = () => (
  <div className="otravel">
    <Header />
    <Form />
    <Footer />
  </div>
);

// == Export
export default Otravel;
