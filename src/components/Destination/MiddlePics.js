import './style.scss';
import Pic2 from 'src/assets/images/rocky2.jpg';
import Pic3 from 'src/assets/images/rocky3.jpg';
import Pic4 from 'src/assets/images/rocky4.jpg';

const MiddlePics = () => (
  <div className="middle_pics">
    <img className="middle_pic1" src={Pic2} />
    <img className="middle_pic2" src={Pic3} />
    <img className="middle_pic3" src={Pic4} />
  </div>
);

export default MiddlePics;
