import './style.scss';

const Inscription = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }

  return (
      <div className="signin_container">

        <h2 className="signin_container__title">Créez votre espace perso</h2>

        <form className="form" onSubmit={handleSubmit} >
          <input className="form__input" type="email" placeholder="Saisissez votre e-mail" />
          <input className="form__input" type="password" placeholder="Saisissez votre mot de passe" />
          <input className="form__input" type="text" placeholder="Saisissez votre prénom" />
          <input className="form__input" type="text" placeholder="Saisissez votre nom" />

          <button className="form__submit" type="submit">Sign In</button>
        </form>

      </div>
  );
};

export default Inscription;
