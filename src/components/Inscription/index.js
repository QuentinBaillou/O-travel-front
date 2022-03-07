import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setFirstname, setLastname } from 'src/actions/authentication'; 
import { setSubmitted, setError, setCreateUser } from '../../actions/authentication';

import './style.scss';

const Inscription = () => {

  const dispatch = useDispatch();

  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);
  const firstname = useSelector((state) => state.authentication.firstname);
  const lastname = useSelector((state) => state.authentication.lastname);

  const error = useSelector((state) => state.authentication.error);
  const submitted = useSelector((state) => state.authentication.submitted);

  console.log(`Email : ${email}`);
  console.log(`Mot de passe : ${password}`);
  console.log(`Prénom : ${firstname}`);
  console.log(`Nom de famille : ${lastname}`);
  console.log(`Erreur : ${error}`);
  console.log(`Submitted : ${submitted}`);

  // A la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '' || firstname === '' || lastname === '') {
      dispatch(setError(true));
    }
    else {
      dispatch(setSubmitted(true));
      dispatch(setError(false));
      setCreateUser();
    }
  };

  // Si authentification réussie
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>L'utilisateur {firstname} {lastname} a bien été enregistré !</h1>
      </div>
    );
  };
 
  // Si persiste des erreurs
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Merci de remplir tous les champs</h1>
      </div>
    );
  };

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
      <div className="signin_container">

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form onSubmit={handleSubmit} className="form">

          <h2 className="signin_container__title">Créez votre espace perso</h2>

            <label htmlFor="email">E-mail</label>
              <input value={email} onChange={handleEmail} className="form__input" name="email" type="email" placeholder="Saisissez votre e-mail" />
            <label htmlFor="password">Mot de passe</label>
              <input value={password} onChange={handlePassword} className="form__input" name="password" type="password" placeholder="Saisissez votre mot de passe" />
            <label htmlFor="firstname">Prénom</label>
              <input value={firstname} onChange={handleFirstname} className="form__input" name="firstname" type="text" placeholder="Saisissez votre prénom" />
            <label htmlFor="lastname">Nom</label>
              <input value={lastname} onChange={handleLastname} className="form__input" name="lastname" type="text" placeholder="Saisissez votre nom" />

          <button className="form__submit" type="submit">Sign In</button>
        </form>

      </div>
  );
};

export default Inscription;
