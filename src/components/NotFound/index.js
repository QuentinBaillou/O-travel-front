import { useNavigate } from 'react-router-dom';
import './style.scss';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h2 className="not-found__title">Erreur 404</h2>
      <img src="https://media.giphy.com/media/mPytjcsG3XS4o/giphy.gif" alt="gif lost" />
      <div className="not-found__content">
        <p>
          Voyager au hasard, c'est bien, mais il faut parfois savoir rester sur les sentiers battus.
          Aller, reviens.
        </p>
        <p>Si tu ne sais plus par où tu es venu, clique sur ce bouton et laisse toi guider.</p>
        <button
          type="button"
          className="not-found__back"
          onClick={() => {
            navigate('/');
          }}
        >Revenir
        </button>
      </div>
    </div>
  );
};

export default NotFound;
