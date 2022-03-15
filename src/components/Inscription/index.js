/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  setEmail, setPassword, setFirstname, setLastname,
  setSubmitted, setCreateUser,
} from 'src/actions/userActions';

import './style.scss';
import Lake from 'src/assets/images/postcard/lake.jpg';
import City from 'src/assets/images/postcard/city.jpg';
import Beach from 'src/assets/images/postcard/beach.jpg';

const Inscription = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const logged = useSelector((state) => state.user.isUserLogged);
  const navigate = useNavigate();

  const submitted = useSelector((state) => state.user.submitted);

  // Redirection after login successful
  useEffect(() => {
    if (logged) {
      navigate('/');
    }
  });

  // When form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const firstnameInput = document.getElementById('firstnameInput');
    const lastnameInput = document.getElementById('lastnameInput');

    const displayErrorMessagesOnSubmit = (i, e, eM) => {
      const input = document.getElementById(`${i}`);
      const error = document.getElementById(`${e}`);

      const currentInput = window[input.dataset.name];
      const currentError = window[error.dataset.name];

      if (!currentInput.validity.valid && currentInput.value !== '') {
        currentError.style.display = 'inline';
        currentError.innerHTML = eM;
      }
      else if (currentInput.value === '') {
        currentError.style.display = 'inline';
        currentError.innerHTML = 'Le champ est vide';
      }
      else {
        currentError.style.display = 'none';
      }
    };

    // Display email errors on submit
    displayErrorMessagesOnSubmit('emailInput', 'emailError', 'Ceci n\'est pas une adresse e-mail valide');

    // Display password errors on submit
    displayErrorMessagesOnSubmit('passwordInput', 'passwordError', 'Doit contenir au moins un chiffre, une majuscule et un caractère spécial');

    // Display firstname errors on submit
    displayErrorMessagesOnSubmit('firstnameInput', 'firstnameError', 'Doit contenir au moins 2 caractères');

    // Display lastname errors on submit
    displayErrorMessagesOnSubmit('lastnameInput', 'lastnameError', 'Doit contenir au moins 2 caractères');

    // eslint-disable-next-line max-len
    if (event && emailInput.validity.valid && passwordInput.validity.valid && firstnameInput.validity.valid && lastnameInput.validity.valid) {
      dispatch(setSubmitted(true));
      dispatch(setCreateUser());

      // Redirection on home page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  // If authentication successful
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

  // Function that can display field error messages dynamically with onChange
  const displayFieldChangeErrorMessage = (i, e, eM) => {
    const input = document.getElementById(`${i}`);
    const error = document.getElementById(`${e}`);

    const currentInput = window[input.dataset.name];
    const currentError = window[error.dataset.name];

    if (currentInput.validity.valid) {
      currentError.innerHTML = '';
      currentError.style.display = 'none';
    }
    else if (!currentInput.validity.valid && currentInput.value !== '') {
      currentError.innerHTML = '';
      currentError.style.display = 'none';
      currentError.innerHTML = eM;
      currentError.style.display = 'inline';
    }
    else if (currentInput.value === '') {
      currentError.innerHTML = '';
      currentError.style.display = 'none';
      currentError.innerHTML = 'Le champ est vide';
      currentError.style.display = 'inline';
    }
  };

  const handleEmail = (event) => {
    displayFieldChangeErrorMessage('emailInput', 'emailError', 'Ceci n\'est pas une adresse e-mail valide');
    dispatch(setEmail(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handlePassword = (event) => {
    displayFieldChangeErrorMessage('passwordInput', 'passwordError', 'Doit contenir au moins un chiffre, une majuscule et un caractère spécial');
    dispatch(setPassword(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handleFirstname = (event) => {
    displayFieldChangeErrorMessage('firstnameInput', 'firstnameError', 'Doit contenir au moins 2 caractères');
    dispatch(setFirstname(event.target.value));
    dispatch(setSubmitted(false));
  };

  const handleLastname = (event) => {
    displayFieldChangeErrorMessage('lastnameInput', 'lastnameError', 'Doit contenir au moins 2 caractères');
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
        <input id="emailInput" className="signin_form__input" data-name="emailInput" value={email} onChange={handleEmail} name="email" type="email" placeholder="Saisissez votre e-mail" required />
        <span id="emailError" data-name="emailError" aria-live="polite" />

        <label className="signin_form__label" htmlFor="password">Mot de passe</label>
        <input id="passwordInput" className="signin_form__input" data-name="passwordInput" value={password} onChange={handlePassword} name="password" type="password" placeholder="Saisissez votre mot de passe" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$" />
        <span id="passwordError" data-name="passwordError" aria-live="polite" />

        <label className="signin_form__label" htmlFor="firstname">Prénom</label>
        <input id="firstnameInput" className="signin_form__input" data-name="firstnameInput" value={firstname} onChange={handleFirstname} name="firstname" type="text" placeholder="Saisissez votre prénom" required minLength="2" />
        <span id="firstnameError" data-name="firstnameError" aria-live="polite" />

        <label className="signin_form__label" htmlFor="lastnameInput">Nom</label>
        <input id="lastnameInput" className="signin_form__input" data-name="lastnameInput" value={lastname} onChange={handleLastname} name="lastnameInput" type="text" placeholder="Saisissez votre nom" required minLength="2" />
        <span id="lastnameError" data-name="lastnameError" aria-live="polite" />

        <button className="signin_form__submit" type="submit">Sign In</button><br />

        <Link to="/login"><span className="signin_form__already">Vous avez déjà un compte ?</span></Link>

      </form>

    </div>
  );
};

export default Inscription;
