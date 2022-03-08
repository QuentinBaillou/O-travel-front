// == Import
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from 'src/components/Header';
import List from 'src/components/List';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';
import AuthenticationForm from 'src/components/AuthenticationForm';
import Profil from 'src/components/Profil';
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
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<AuthenticationForm shape="login" />} />
      <Route path="/login/forgotten-password" element={<AuthenticationForm shape="forgotten-password" />} />
      <Route path="/logout" element={<Navigate to="/" />} />
      <Route path="/profile" element={<Profil />} />
      <Route path="/inscription" element={<Inscription />} />
    </Routes>
    <Footer />
  </div>
);

// == Export
export default Otravel;
