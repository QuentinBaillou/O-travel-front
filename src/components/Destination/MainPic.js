import './style.scss';
import Pic1 from 'src/assets/images/rocky1.jpg';

const MainPic = ({picture}) => (
  <div>
    <img className="main_pic" src={picture} />
  </div>
);

export default MainPic;
