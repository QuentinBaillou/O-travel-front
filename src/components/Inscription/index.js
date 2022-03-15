/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setEmail, setPassword, setFirstname, setLastname,
  setSubmitted, setError, setCreateUser,
} from 'src/actions/userActions';

import './style.scss';

const Inscription = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const logged = useSelector((state) => state.user.isUserLogged);
  const navigate = useNavigate();

  const error = useSelector((state) => state.user.error);
  const submitted = useSelector((state) => state.user.submitted);

  // Redirection after successfully logged, using useNavigate hook from react-router-dom
  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  });

  // console.log(`Email : ${email}`);
  // console.log(`Mot de passe : ${password}`);
  // console.log(`Prénom : ${firstname}`);
  // console.log(`Nom de famille : ${lastname}`);
  // console.log(`Erreur : ${error}`);
  // console.log(`Submitted : ${submitted}`);

  // At form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '' || firstname === '' || lastname === '') {
      dispatch(setError(true));
    }
    else {
      dispatch(setSubmitted(true));
      dispatch(setError(false));
      dispatch(setCreateUser());
    }
  };

  // If successful authentication
  const successMessage = () => (
    <div
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}
    >
      <h1>L'utilisateur {firstname} {lastname} a bien été enregistré !</h1>
    </div>
  );

  // If there is still error
  const errorMessage = () => (
    <div
      className="error"
      style={{
        display: error ? '' : 'none',
      }}
    >
      <h1>Merci de remplir tous les champs</h1>
    </div>
  );

  const handleEmail = (event) => {
    dispatch(setEmail(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handlePassword = (event) => {
    dispatch(setPassword(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handleFirstname = (event) => {
    dispatch(setFirstname(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handleLastname = (event) => {
    dispatch(setLastname(event.target.value));
    dispatch(setSubmitted(false));
  };

  return (
    <div className="signin">

      <h2 className="signin__title">Inscription</h2>

      <form onSubmit={handleSubmit} className="signin_form">

        {error
        && (
        <div className="signin_form__error-message">
          {errorMessage()}
        </div>
        )}

        {submitted
        && (
        <div className="signin_form__submitted-message">
          {successMessage()}
        </div>
        )}

        <label className="signin_form__label" htmlFor="email">E-mail</label>
        <input
          className="signin_form__input"
          value={email}
          onChange={handleEmail}
          name="email"
          id="email"
          type="email"
          placeholder="Saisissez votre e-mail"
        />
        <label className="signin_form__label" htmlFor="password">Mot de passe</label>
        <input
          className="signin_form__input"
          value={password}
          onChange={handlePassword}
          name="password"
          id="password"
          type="password"
          placeholder="Saisissez votre mot de passe"
        />
        <label className="signin_form__label" htmlFor="firstname">Prénom</label>
        <input
          className="signin_form__input"
          value={firstname}
          onChange={handleFirstname}
          name="firstname"
          id="firstname"
          type="text"
          placeholder="Saisissez votre prénom"
        />
        <label className="signin_form__label" htmlFor="lastname">Nom</label>
        <input
          className="signin_form__input"
          value={lastname}
          onChange={handleLastname}
          name="lastname"
          id="lastname"
          type="text"
          placeholder="Saisissez votre nom"
        />

        <button className="signin_form__submit" type="submit">Sign In</button>
      </form>

    </div>
  );
};

export default Inscription;
