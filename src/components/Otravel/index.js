// == Import
import Header from 'src/components/Header';
import List from 'src/components/List';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';

import './style.scss';

// == Composant
const Otravel = () => (
  <div className="otravel">
    <Header />
    <Home />
    <List />
    <Footer />
  </div>
);

// == Export
export default Otravel;
