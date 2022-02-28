import './style.scss';
import Flag from 'src/assets/svg/flag_canada.svg';

const Header = () => {
  return(
    <header className="destination_header">
      <div className="block_part_title">
        <span className="title">Rocky Mountaineer</span> 
      </div>

      <div className="block_part_infos">
          <img className="flag" src={Flag} />
        
          <div className="infos">

          </div>
      </div>
    </header>
  );
};

export default Header;
