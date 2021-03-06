import './style.scss';
import PropTypes from 'prop-types';

const MiddlePics = ({ picture2, picture3, picture4 }) => (
  <div className="middle_pics">
    <img className="middle_pics__pic1" src={picture2} alt="Milieu" />
    <img className="middle_pics__pic2" src={picture3} alt="Milieu" />
    <img className="middle_pics__pic3" src={picture4} alt="Milieu" />
  </div>
);

MiddlePics.propTypes = {
  picture2: PropTypes.string.isRequired,
  picture3: PropTypes.string.isRequired,
  picture4: PropTypes.string.isRequired,
};

export default MiddlePics;
