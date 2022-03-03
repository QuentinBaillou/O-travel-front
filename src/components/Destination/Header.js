import './style.scss';
import Flag from 'src/assets/svg/flag_canada.svg';

const Header = ({state}) => (
  <header className="destination_header">
    <div className="block_part_title">
      <h1 className="title">{state}</h1>
    </div>

    <div className="block_part_infos">
      <div className="flag">
        <img src={Flag} />
      </div>

      <div className="infos">
        <span className="nights">8 nuits</span>
        |
        <span className="way">train</span>
        |
        <span className="price">1500€ / p.</span>
      </div>

      <div className="hidden">
        <span>.</span>
      </div>

    </div>
  </header>
);

export default Header;
