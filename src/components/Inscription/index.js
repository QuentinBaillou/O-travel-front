import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setEmail, setPassword, setFirstname, setLastname,
  setSubmitted, setError, setCreateUser,
} from 'src/actions/signin';

import './style.scss';

const Inscription = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.signin.email);
  const password = useSelector((state) => state.signin.password);
  const firstname = useSelector((state) => state.signin.firstname);
  const lastname = useSelector((state) => state.signin.lastname);
  const logged = useSelector((state) => state.authentication.isUserLogged);
  const navigate = useNavigate();

  const error = useSelector((state) => state.signin.error);
  const submitted = useSelector((state) => state.signin.submitted);

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

  // A la soumission du formulaire
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

  // Si authentification réussie
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

  // Si persiste des erreurs
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

      <div className="signin_messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <h2 className="signin_title">Créez votre espace perso</h2><br />

      <form onSubmit={handleSubmit} className="signin_form">
        <label htmlFor="email">E-mail</label><br />
        <input className="signin_form__input" size="60" value={email} onChange={handleEmail} className="form__input" name="email" type="email" placeholder="Saisissez votre e-mail" /><br />
        <label htmlFor="password">Mot de passe</label><br />
        <input className="signin_form__input" size="60" value={password} onChange={handlePassword} className="form__input" name="password" type="password" placeholder="Saisissez votre mot de passe" /><br />
        <label htmlFor="firstname">Prénom</label><br />
        <input className="signin_form__input" size="60" value={firstname} onChange={handleFirstname} className="form__input" name="firstname" type="text" placeholder="Saisissez votre prénom" /><br />
        <label htmlFor="lastname">Nom</label><br />
        <input className="signin_form__input" size="60" value={lastname} onChange={handleLastname} className="form__input" name="lastname" type="text" placeholder="Saisissez votre nom" /><br /><br />

        <button className="signin_form__submit" type="submit">Sign In</button>
      </form>

    </div>
  );
};

export default Inscription;
