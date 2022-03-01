// IMPORT composants internes
import Header from 'src/components/Destination/Header';
import MainPic from 'src/components/Destination/MainPic';
import Summary from 'src/components/Destination/Summary';
import MiddlePics from 'src/components/Destination/MiddlePics';
import Itinerary from 'src/components/Destination/Itinerary';
import FinalPic from 'src/components/Destination/FinalPic';

import Test from 'src/components/FramerMotion';

// IMPORT styles
import './style.scss';

const Destination = () => {

return (
  <div className="container">
    <Header />
    <MainPic />
    <Summary />
    <MiddlePics />
    <Itinerary />
    <FinalPic />
    <Test />
  </div>
);
};

export default Destination;
