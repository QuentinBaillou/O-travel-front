import { useDispatch, useSelector } from 'react-redux';
import { setFlag } from 'src/actions/destinationActions';

import './style.scss';

import PropTypes from 'prop-types';

const Header = ({state, surname, way, price_per_night}) => {
  
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.destination.flag);

  //* Flags display
  if(state == 'Pays nordique'){
    import(`src/assets/svg/flags/pays_nordique.svg`).then((response) => {
      dispatch(setFlag(response.default));
    });
  }
  else if(state == 'Amérique du Sud'){
    import(`src/assets/svg/flags/amerique_du_sud.svg`).then((response) => {
      dispatch(setFlag(response.default));
    });
  }
  else if(state == 'Road Trip Alpes'){
    import(`src/assets/svg/flags/road_trip_alpes.svg`).then((response) => {
      dispatch(setFlag(response.default));
    });
  }
  else {
    import(`src/assets/svg/flags/${state}.svg`).then((response) => {
      dispatch(setFlag1(response.default));
    });
  }
   //* Flags display

  return (
    <header className="destination_header">
      <div className="block_part_title">
        <h1 className="title">{surname}</h1>
      </div>

    <div className="block_part_infos">
      <div className="flags">
        <img src={flag} />
      </div>

        <div className="infos">
          <span className="nights" />

          <span className="way">{way}</span>
          |
          <span className="price">{price_per_night} / p.</span>
        </div>

        <div className="hidden">
          <span>.</span>
        </div>

      </div>
    </header>
  );

  Header.propTypes = {
    state: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    way: PropTypes.string.isRequired,
    price_per_night: PropTypes.number.isRequired,
  };
};

export default Header;
