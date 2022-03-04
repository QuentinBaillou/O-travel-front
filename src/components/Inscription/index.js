const Inscription = () => {

  return (
    <div className="container">
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
