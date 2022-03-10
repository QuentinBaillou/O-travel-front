import PropTypes from 'prop-types';

import './style.scss';

const Summary = ({ extract }) => (
  <div className="summary_wrapper">
    <p className="summary_wrapper__extract">
      {extract}
    </p>

    <div className="summary_wrapper__strong_points">
        <h2 className="summary_wrapper__strong_points-title">Points forts</h2><br />
        <ul>
          <span>&#8227;</span><li className="summary_wrapper__strong_points-element"> Soluta voluptas a accusamus</li><br /><br />
          <span>&#8227;</span><li className="summary_wrapper__strong_points-element"> Ab mollitia, in totam consectetur iste esse</li><br /><br />
          <span>&#8227;</span><li className="summary_wrapper__strong_points-element"> Quos reprehenderit quod iusto soluta nulla.</li><br /><br />
        </ul>
    </div>

  </div>
);

Summary.propTypes = {
  extract: PropTypes.string.isRequired,
};

export default Summary;
