import './style.scss';
import Flag from 'src/assets/svg/flag_canada.svg';

const Header = () => {
  return(
    <header className="destination_header">
      <div className="block_part_title">
        <span className="title">Rocky Mountaineer</span> 
      </div>

      <div className="block_part_infos">
        <div className="flag">
          <img src={Flag} />
        </div>
        
        <div className="infos">
          <span>8 nuits | train | 1500€ / p.</span>
        </div>

        <div className="hidden">
          <span>.</span>
        </div>
    
      </div>
    </header>
  );
};

export default Header;
