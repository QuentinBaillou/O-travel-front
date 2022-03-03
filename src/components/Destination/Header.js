import { useDispatch, useSelector } from 'react-redux';
import { setFlag } from 'src/actions/destinationActions';

import './style.scss';

const Header = ({
  state, surname, way, price_per_night,
}) => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.destination.countryName);

  import(`src/assets/svg/flags/${state}.svg`).then((response) => {
    console.log(response.default);
    dispatch(setFlag(response.default));
  });

  return (
    <header className="destination_header">
      <div className="block_part_title">
        <h1 className="title">{surname}</h1>
      </div>

      <div className="block_part_infos">
        <div className="flag">

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
};

export default Header;
