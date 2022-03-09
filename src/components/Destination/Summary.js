import PropTypes from 'prop-types';

import './style.scss';

const Summary = ({ extract }) => (
  <div className="summary_wrapper">
    <div className="summary">
      {extract}
    </div>

    <div className="strong_points_wrapper">
      <div className="strong_points">
        <h2>Points forts</h2>
        <br />
        <ul>
          <span className="bullet_point">&#8227;</span><li> Soluta voluptas a accusamus</li><br />
          <span className="bullet_point">&#8227;</span><li> Ab mollitia, in totam consectetur iste esse</li><br />
          <span className="bullet_point">&#8227;</span><li> Quos reprehenderit quod iusto soluta nulla.</li><br />
        </ul>
      </div>
    </div>

  </div>
);

Summary.propTypes = {
  extract: PropTypes.string.isRequired,
};

export default Summary;
