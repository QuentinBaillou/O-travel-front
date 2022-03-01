// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';

import './style.scss';

// == Composant
const Otravel = () => (
  <div className="otravel">
    <Header />
    <Home />
    <Footer />
  </div>
);

// == Export
export default Otravel;
