import { useDispatch, useSelector } from 'react-redux';
import { setFlag1, setFlag2, setFlag3 } from 'src/actions/destinationActions';

import './style.scss';

<<<<<<< HEAD
const Header = ({
  state, surname, way, price_per_night,
}) => {
=======
import PropTypes from 'prop-types';

const Header = ({state, surname, way, price_per_night}) => {
  
>>>>>>> page-fiche-voyage
  const dispatch = useDispatch();
  const flag1 = useSelector((state) => state.destination.flag1);
  const flag2 = useSelector((state) => state.destination.flag2);
  const flag3 = useSelector((state) => state.destination.flag3);

  //* Flags display
  if(state == 'Pays nordique'){
    import(`src/assets/svg/flags/Suède.svg`).then((response) => {
      dispatch(setFlag1(response.default));
    });
    import(`src/assets/svg/flags/Norvège.svg`).then((response) => {
      dispatch(setFlag2(response.default));
    });
  }
  else if(state == 'Amérique du Sud'){
    import(`src/assets/svg/flags/Bolivie.svg`).then((response) => {
      dispatch(setFlag1(response.default));
    });
    import(`src/assets/svg/flags/Paraguay.svg`).then((response) => {
      dispatch(setFlag2(response.default));
    });
    import(`src/assets/svg/flags/Argentine.svg`).then((response) => {
      dispatch(setFlag3(response.default));
    });
  }
  else if(state == 'Road Trip Alpes'){
    import(`src/assets/svg/flags/Suisse.svg`).then((response) => {
      dispatch(setFlag1(response.default));
    });
    import(`src/assets/svg/flags/Italie.svg`).then((response) => {
      dispatch(setFlag2(response.default));
    });
    import(`src/assets/svg/flags/Croatie.svg`).then((response) => {
      dispatch(setFlag3(response.default));
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
        <img src={flag1} />
        <img src={flag2} />
        <img src={flag3} />
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
