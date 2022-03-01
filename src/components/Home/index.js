import Form from 'src/components/Form';

import backgroundVideo from 'src/assets/video/background-video.mp4';

import './style.scss';

const Home = () => (
  <div className="home">
    <h2 className="home__title">Chercher un voyage</h2>
    <video autoPlay muted loop id="background-video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    <Form />
  </div>
);

export default Home;
