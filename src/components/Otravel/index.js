// == Import
import { Routes, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import List from 'src/components/List';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Inscription from 'src/components/Inscription';

import './style.scss';
import Destination from 'src/components/Destination';

// == Composant
const Otravel = () => (
  <div className="otravel">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<List />} />
      <Route path="/destinations/:id" element={<Destination />} />
      <Route path="/signin" element={<Inscription />} />
    </Routes>
    <Footer />
  </div>
);

// == Export
export default Otravel;
