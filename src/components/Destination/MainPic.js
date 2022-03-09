import './style.scss';
import PropTypes from 'prop-types';

const MainPic = ({ picture }) => (
  <div>
    <img className="main_pic" src={picture} alt="Majeure" />
  </div>
);

MainPic.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default MainPic;
