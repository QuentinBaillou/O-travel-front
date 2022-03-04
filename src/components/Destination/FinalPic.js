import './style.scss';
import PropTypes from 'prop-types';

const FinalPic = ({picture5}) => {

  return (  
    <div>
      <img className="final_pic" src={picture5} />
    </div>
  );

  FinalPic.propTypes = {
    picture5: PropTypes.string.isRequired,
  };

};

export default FinalPic;
