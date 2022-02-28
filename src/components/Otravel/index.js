// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Checkbox from 'src/components/Checkbox';

import './style.scss';

// == Composant
const Otravel = () => (
  <div className="otravel">
    <Header />
    <Checkbox />
    <Footer />
  </div>
);

// == Export
export default Otravel;
