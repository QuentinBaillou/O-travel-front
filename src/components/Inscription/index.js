import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setEmail, setPassword, setFirstname, setLastname,
  setSubmitted, setCreateUser,
} from 'src/actions/signin';
import { Link } from 'react-router-dom';

import './style.scss';
import Lake from 'src/assets/images/postcard/lake.jpg';
import City from 'src/assets/images/postcard/city.jpg';
import Beach from 'src/assets/images/postcard/beach.jpg';

const Inscription = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.signin.email);
  const password = useSelector((state) => state.signin.password);
  const firstname = useSelector((state) => state.signin.firstname);
  const lastname = useSelector((state) => state.signin.lastname);
  const logged = useSelector((state) => state.authentication.isUserLogged);
  const navigate = useNavigate();

  const submitted = useSelector((state) => state.signin.submitted);

  // Redirection après login réussi
  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  });

  // A la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const firstnameInput = document.getElementById('firstnameInput');
    const lastnameInput = document.getElementById('lastnameInput');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const firstnameError = document.getElementById('firstnameError');
    const lastnameError = document.getElementById('lastnameError');

    // On affiche ou non une erreur e-mail
    if (!emailInput.validity.valid) {
      emailError.style.display = 'inline';
      emailError.innerHTML = 'Ceci n\'est pas une adresse e-mail valide';
    }
    else {
      emailError.style.display = 'none';
    }

    // On affiche ou non une erreur password
    if (!passwordInput.validity.valid) {
      passwordError.style.display = 'inline';
      passwordError.innerHTML = 'Doit contenir au moins un chiffre, une majuscule et un caractère spécial';
    }
    else {
      passwordError.innerHTML = '';
      passwordError.style.display = 'none';
    }
  
    // On affiche ou non une erreur prénom
    if (!firstnameInput.validity.valid) {
      firstnameError.style.display = 'inline';
      firstnameError.innerHTML = 'Doit contenir au moins 2 caractères';
    }
    else {
      firstnameError.innerHTML = '';
      firstnameError.style.display = 'none';
    }

    // On affiche ou non une erreur nom
    if (!lastnameInput.validity.valid) {
      lastnameError.style.display = 'inline';
      lastnameError.innerHTML = 'Doit contenir au moins 2 caractères';
    }
    else {
      lastnameError.innerHTML = '';
      lastnameError.style.display = 'none';
    }

    if (event &&
        emailInput.validity.valid &&
        passwordInput.validity.valid &&
        firstnameInput.validity.valid &&
        lastnameInput.validity.valid
       ) {
      dispatch(setSubmitted(true));
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

      <div className="postcards_wrapper">
        <img id="lake" src={Lake} alt="lake" />
        <img id="city" src={City} alt="city" />
        <img id="beach" src={Beach} alt="beach" />
      </div>

      <h2 className="signin__title">Inscription</h2>

      <form onSubmit={handleSubmit} className="signin_form" noValidate>

        {submitted
        && (
        <div className="signin_form__submitted-message">
          {successMessage()}
        </div>
        )}

        <label className="signin_form__label" htmlFor="email">E-mail</label>
        <input id="emailInput" className="signin_form__input" value={email} onChange={handleEmail} name="email" type="email" placeholder="Saisissez votre e-mail" required />
        <span id="emailError" aria-live="polite"></span>

        <label className="signin_form__label" htmlFor="password">Mot de passe</label>
        <input id="passwordInput" className="signin_form__input" value={password} onChange={handlePassword} name="password" type="password" placeholder="Saisissez votre mot de passe" required pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" />
        <span id="passwordError" aria-live="polite"></span>

        <label className="signin_form__label" htmlFor="firstname">Prénom</label>
        <input id="firstnameInput" className="signin_form__input" value={firstname} onChange={handleFirstname} name="firstname" type="text" placeholder="Saisissez votre prénom" required minLength="2" />
        <span id="firstnameError" aria-live="polite"></span>

        <label className="signin_form__label" htmlFor="lastname">Nom</label>
        <input id="lastnameInput" className="signin_form__input" value={lastname} onChange={handleLastname} name="lastname" type="text" placeholder="Saisissez votre nom" required minLength="2" />
        <span id="lastnameError" aria-live="polite"></span>

        <button className="signin_form__submit" type="submit">Sign In</button><br />
          
        <Link to="/login"><span className="signin_form__already">Vous avez déjà un compte ?</span></Link>

      </form>

    </div>
  );
};

export default Inscription;


// if (email === '' || password === '' || firstname === '' || lastname === '') {
//   dispatch(setEmptyFieldError(true));
// }
// else {
//   dispatch(setEmptyFieldError(false));

//   if (firstname.length < 2) {
//     dispatch(setFirstnameError(true));
//   }
//   else {
//     dispatch(setFirstnameError(false));
//     if (lastnameError === false) {
//       dispatch(setSubmitted(true));
//       dispatch(setCreateUser());
//     }
//   }
//   if (lastname.length < 2) {
//     dispatch(setLastnameError(true));
//   }
//   else {
//     dispatch(setLastnameError(false));
//     if (firstnameError === false) {
//       dispatch(setSubmitted(true));
//       dispatch(setCreateUser());
//     }
//   }
// }


// {lastnameError
//   && (
//   <div className="signin_form__error-message">
//     {lastnameErrorMessage()}
//   </div>
//   )}

//   {firstnameError
//   && (
//   <div className="signin_form__error-message">
//     {firstnameErrorMessage()}
//   </div>
//   )}

//   {emptyFieldError
//   && (
//   <div className="signin_form__error-message">
//     {emptyFieldMessage()}
//   </div>
//   )}


// // Si persiste des champs vides
// const emptyFieldMessage = () => (
//   <div
//     className="error"
//     style={{
//       display: emptyFieldError ? '' : 'none',
//     }}
//   >
//     <h1>Merci de remplir tous les champs</h1>
//   </div>
// );

// // Si erreur champ firstname
// const firstnameErrorMessage = () => (
//   <div
//     className="error"
//     style={{
//       display: firstnameError ? '' : 'none',
//     }}
//   >
//     <h1>Le champ prénom doit contenir au moins 2 caractères</h1>
//   </div>
// );

// // Si erreur champ lastname
// const lastnameErrorMessage = () => (
//   <div
//     className="error"
//     style={{
//       display: lastnameError ? '' : 'none',
//     }}
//   >
//     <h1>Le champ nom doit contenir au moins 2 caractères</h1>
//   </div>
// );

// const firstnameError = useSelector((state) => state.signin.firstnameError);
//   const lastnameError = useSelector((state) => state.signin.lastnameError);

//   const emptyFieldError = useSelector((state) => state.signin.emptyFieldError);


//setEmptyFieldError, setCreateUser, setFirstnameError, setLastnameError,


//if (event.target.validity.valid) {

  //   const emailError = document.querySelector('.emailError');

  //   emailError.innerHTML = '';
  //   emailError.className = 'emailError';
