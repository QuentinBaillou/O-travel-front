import './style.scss';
import PropTypes from 'prop-types';

const MiddlePics = ({picture2, picture3, picture4}) => {

  return (
    <div className="middle_pics">
      <img className="middle_pic1" src={picture2} />
      <img className="middle_pic2" src={picture3} />
      <img className="middle_pic3" src={picture4} />
    </div>
  );

  MiddlePics.propTypes = {
    picture2: PropTypes.string.isRequired,
    picture3: PropTypes.string.isRequired,
    picture4: PropTypes.string.isRequired,
  };

};

export default MiddlePics;
