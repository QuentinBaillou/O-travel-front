import './style.scss';
import PropTypes from 'prop-types';

const MainPic = ({picture}) => {
  
  return (
    <div>
      <img className="main_pic" src={picture} />
    </div>
  );

  MainPic.propTypes = {
    picture5: PropTypes.string.isRequired,
  };

};

export default MainPic;
