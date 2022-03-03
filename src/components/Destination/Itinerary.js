import './style.scss';
import ItineraryIcon from 'src/assets/svg/itinerary.svg';

const Itinerary = ({summary}) => (
  <div className="itinerary">

    <img className="itinerary_icon" src={ItineraryIcon} />

    <p className="itinerary_text">{summary}<br /><br />
    </p>

  </div>
);

export default Itinerary;
