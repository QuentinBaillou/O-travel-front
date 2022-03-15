// == Import
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';

import Header from 'src/components/Header';
import List from 'src/components/List';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';
import UserForm from 'src/components/UserForm';
import Profil from 'src/components/Profil';
import Inscription from 'src/components/Inscription';
import LegalNotice from 'src/components/LegalNotice';

import './style.scss';
import Destination from 'src/components/Destination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLastUser } from 'src/actions/userActions';

// == Composant
const Otravel = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getLastUser());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="otravel">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<List />} />
        <Route path="/destinations/:id" element={<Destination />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<UserForm shape="login" />} />
        {/* <Route
          path="/login/forgotten-password"
          element={
            <UserForm shape="forgotten-password" />
          }
        /> */}
        <Route path="/logout" element={<Navigate to="/" />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default Otravel;
