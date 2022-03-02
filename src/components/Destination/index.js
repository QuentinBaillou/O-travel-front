import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// IMPORT composants internes
import Header from 'src/components/Destination/Header';
import MainPic from 'src/components/Destination/MainPic';
import Summary from 'src/components/Destination/Summary';
import MiddlePics from 'src/components/Destination/MiddlePics';
import Itinerary from 'src/components/Destination/Itinerary';
import FinalPic from 'src/components/Destination/FinalPic';

// IMPORT styles
import './style.scss';

const Destination = () => {

  const destinations = useSelector((state) => state.destination.destinations);

  useEffect(
    () => {
      console.log(destinations);
    },
    [],
  );

  return (
  <div className="container">
    <Header />
    <MainPic />
    <Summary />
    <MiddlePics />
    <Itinerary />
    <FinalPic />

  </div>
  );
};

export default Destination;
