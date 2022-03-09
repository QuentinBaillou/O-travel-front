/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

// IMPORT composants internes
import Header from 'src/components/Destination/Header';
import MainPic from 'src/components/Destination/MainPic';
import Summary from 'src/components/Destination/Summary';
import MiddlePics from 'src/components/Destination/MiddlePics';
import Itinerary from 'src/components/Destination/Itinerary';
import FinalPic from 'src/components/Destination/FinalPic';
import Loading from 'src/components/Loading';

// IMPORT styles
import './style.scss';

import { getDestination } from 'src/actions/destinationActions';

const Destination = () => {
  const dispatch = useDispatch();
  const { id: urlId } = useParams();

  useEffect(
    () => {
      dispatch(getDestination(urlId));
    },
    [],
  );

  const currentDestination = useSelector((state) => state.destination.destination);
  const currentTransport = useSelector((state) => state.destination.destination.transport);

  const way = currentTransport && currentTransport[0].way;

  const {
    id,
    state,
    surname,
    extract,
    summary,
    price_per_night,
    picture,
    picture2,
    picture3,
    picture4,
    picture5,
  } = currentDestination;

  if (id) {
    return (
      <div className="container">
        <Header country={state} surname={surname} price_per_night={price_per_night} way={way} />
        <MainPic picture={picture} />
        <Summary extract={extract} />
        <MiddlePics picture2={picture2} picture3={picture3} picture4={picture4} />
        <Itinerary summary={summary} />
        <FinalPic picture5={picture5} />

      </div>
    );
  }
  return <Loading />;
};

export default Destination;
